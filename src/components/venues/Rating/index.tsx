import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import { getRatingStars } from "@/utils/rating";

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
