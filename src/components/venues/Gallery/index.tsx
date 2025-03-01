import { useRef, useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Media } from "@/types/media";
import { DEFAULT_VENUE_IMG } from "@/constants/images";

/**
 * Gallery component that renders an interactive image carousel.
 * Users can navigate through images using arrow buttons or swipe gestures.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.images - List of images to display in the gallery.
 *
 * @returns JSX element representing the gallery.
 */
export default function Gallery({ images }: { images: Media[] }) {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [currentPos, setCurrentPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  /**
   * Moves to the previous slide in the gallery.
   * Loops back to the last image if at the first slide.
   */
  const handlePrevSlide = () => {
    setIsDragging(false);
    setCurrentPos((prevPos) => {
      if (prevPos - 1 < 0) {
        return images.length - 1;
      }
      return prevPos - 1;
    });
  };

  /**
   * Moves to the next slide in the gallery.
   * Loops back to the first image if at the last slide.
   */
  const handleNextSlide = () => {
    setIsDragging(false);
    setCurrentPos((prevPos) => {
      if (prevPos + 1 > images.length - 1) {
        return 0;
      }
      return prevPos + 1;
    });
  };

  /**
   * Updates the current slide position based on scroll position.
   * Only updates if the user is actively dragging.
   */
  const handleScroll = () => {
    if (!isDragging) return;

    const slider = sliderRef.current;

    if (slider) {
      const slideItemWidth = slider.children[0].clientWidth;
      const slidePosition = slider.scrollLeft;
      setCurrentPos(Math.round(slidePosition / slideItemWidth));
    }
  };

  /**
   * Sets dragging state to true on touch move.
   */
  const handleTouchMove = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    if (isDragging) return;

    const slider = sliderRef.current;

    if (slider) {
      const slideItemWidth = slider.children[0].clientWidth;
      slider.scrollLeft = currentPos * slideItemWidth;
    }
  }, [currentPos, isDragging]);

  return (
    <div className="relative">
      <ul
        ref={sliderRef}
        onScroll={handleScroll}
        onTouchMove={handleTouchMove}
        className="grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col overflow-x-auto scroll-smooth no-scrollbar md:rounded-md"
      >
        {images.map(({ url, alt }, index) => (
          <li key={index} className="aspect-3/2 snap-start md:aspect-5/2">
            <img
              src={url}
              alt={alt}
              onError={(e) => (e.currentTarget.src = DEFAULT_VENUE_IMG)}
              className="size-full object-cover"
            />
          </li>
        ))}
      </ul>

      <button
        aria-label="Previous image"
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 grid h-10 w-9 -translate-y-1/2 place-items-center rounded-md bg-neutral-300 transition-colors hover:bg-neutral-100"
      >
        <BiChevronLeft size={32} className="text-teal-900" />
      </button>

      <span className="absolute bottom-4 left-1/2 grid h-8 w-10 -translate-x-1/2 place-items-center rounded-md bg-neutral-100 font-semibold text-teal-900">
        {currentPos + 1}/{images.length}
      </span>

      <button
        aria-label="Next image"
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 grid h-10 w-9 -translate-y-1/2 place-items-center rounded-md bg-neutral-300 transition-colors hover:bg-neutral-100"
      >
        <BiChevronRight size={32} className="text-teal-900" />
      </button>
    </div>
  );
}
