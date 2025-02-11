import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import { getRatingStars } from "@/utils/common/rating";

/**
 * Rating component that displays stars and a numeric rating label.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.rating - The rating number, which can be a decimal.
 *
 * @returns JSX element representing the rating with stars.
 */
export default function Rating({ rating }: { rating: number }) {
  const stars = getRatingStars(rating);

  return (
    <div className="mb-2 flex items-center gap-2">
      <ul className="flex gap-2">
        {stars.map((starType, index) => (
          <li key={index}>
            {starType === "solid" && <BiSolidStar />}
            {starType === "half" && <BiSolidStarHalf />}
            {starType === "empty" && <BiStar />}
          </li>
        ))}
      </ul>
      <span>({rating === 0 ? rating : rating.toFixed(1)})</span>
    </div>
  );
}
