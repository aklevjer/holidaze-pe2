import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { BiTrash } from "react-icons/bi";

import { Venue } from "@/types/venue";
import { VenueFormData, venueSchema } from "@/schemas/venueSchema";
import { isImgUrlValid } from "@/utils/validation";

import TextInput from "@/components/ui/TextInput";
import Textarea from "@/components/ui/Textarea";
import Checkbox from "@/components/ui/Checkbox";
import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";

interface VenueFormProps {
  onSubmit: (venueData: VenueFormData) => void;
  isPending: boolean;
  error: Error | null;
  venue?: Venue;
  onDelete?: () => void;
}

export default function VenueForm({ onSubmit, isPending, error, venue, onDelete }: VenueFormProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VenueFormData>({
    resolver: zodResolver(venueSchema),
    defaultValues: venue || {},
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "media",
  });

  const handleAddImage = async () => {
    if (fields.length >= 8) return;

    const isValid = await isImgUrlValid(imageUrl);
    if (!isValid) {
      setImageUrlError("URL must be a valid image URL");
      return;
    }

    append({ url: imageUrl, alt: "" });
    setImageUrl("");
    setImageUrlError("");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border border-neutral-300 px-4 py-8 shadow-elevated sm:px-8"
    >
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Details</legend>

        <TextInput
          id="name"
          type="text"
          label="Venue Name"
          placeholder="Venue Name"
          register={register("name")}
          error={errors.name}
        />

        <Textarea
          id="description"
          label="Description"
          placeholder="Write your description here.."
          register={register("description")}
          error={errors.description}
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <TextInput
            id="price"
            type="number"
            label="Price /Night"
            placeholder="100"
            min={1}
            max={10000}
            register={register("price")}
            error={errors.price}
          />

          <TextInput
            id="maxGuests"
            type="number"
            label="Max Guests"
            placeholder="1"
            min={1}
            max={100}
            register={register("maxGuests")}
            error={errors.maxGuests}
          />

          <TextInput
            id="rating"
            type="number"
            label="Rating"
            placeholder="0"
            step={0.1}
            min={0}
            max={5}
            register={register("rating")}
            error={errors.rating}
          />
        </div>

        <fieldset className="space-y-2">
          <legend className="text-m font-medium">Amenities</legend>

          <div className="grid grid-cols-2 gap-2">
            <Checkbox id="wifi" label="Wifi" register={register("meta.wifi")} />
            <Checkbox id="parking" label="Parking" register={register("meta.parking")} />
            <Checkbox id="breakfast" label="Breakfast" register={register("meta.breakfast")} />
            <Checkbox id="pets" label="Pets" register={register("meta.pets")} />
          </div>
        </fieldset>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Location</legend>

        <TextInput
          id="address"
          type="text"
          label="Address"
          placeholder="Address"
          register={register("location.address")}
        />

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            id="zip"
            type="text"
            label="Zip Code"
            placeholder="Zip"
            register={register("location.zip")}
          />

          <TextInput
            id="city"
            type="text"
            label="City"
            placeholder="City"
            register={register("location.city")}
          />
        </div>

        <TextInput
          id="country"
          type="text"
          label="Country"
          placeholder="Country"
          register={register("location.country")}
        />
      </fieldset>

      <fieldset className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <legend className="text-lg font-semibold">Images</legend>
            <Tooltip text="Paste an image URL and click 'Add' to include it. The first image becomes the main one." />
          </div>

          <TextInput
            id="image"
            type="url"
            label="Image URL"
            placeholder="https://example.com/image.jpg"
            maxLength={300}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            error={imageUrlError ? { message: imageUrlError } : undefined}
          >
            <Button variant="secondary" type="button" onClick={handleAddImage}>
              Add
            </Button>
          </TextInput>
        </div>

        {fields.length > 0 && (
          <ul className="divide-y divide-neutral-300 border-y border-neutral-300">
            {fields.map((field, index) => (
              <li key={field.id} className="flex flex-wrap gap-4 py-6">
                <div className="flex-1 basis-36">
                  <img
                    src={field.url}
                    alt={field.alt}
                    className="aspect-3/2 size-full rounded-md object-cover"
                  />
                </div>

                <div className="flex flex-1 basis-64 flex-col gap-2 [&_textarea]:min-h-20">
                  <Textarea
                    id={`media.${index}.alt`}
                    label="Image description"
                    placeholder="Write your image description.."
                    maxLength={120}
                    register={{ ...register(`media.${index}.alt`) }}
                  />

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="flex items-center gap-1 self-end text-m font-medium text-slate-500 transition-colors hover:text-teal-900"
                  >
                    <BiTrash size={18} />
                    <span>Remove</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </fieldset>

      {error && <Alert type="error" message={error.message} />}

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          variant="primary"
          type="submit"
          isLoading={isPending}
          className={twMerge(!venue && "w-full")}
        >
          {venue ? "Update venue" : "Add venue"}
        </Button>

        {venue && (
          <Button variant="danger" type="button" onClick={onDelete}>
            Delete venue
          </Button>
        )}
      </div>
    </form>
  );
}
