import { useRef, useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Media } from "@/types/media";

export default function Gallery({ images }: { images: Media[] }) {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [currentPos, setCurrentPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrevSlide = () => {
    setIsDragging(false);
    setCurrentPos((prevPos) => {
      if (prevPos - 1 < 0) {
        return images.length - 1;
      }
      return prevPos - 1;
    });
  };

  const handleNextSlide = () => {
    setIsDragging(false);
    setCurrentPos((prevPos) => {
      if (prevPos + 1 > images.length - 1) {
        return 0;
      }
      return prevPos + 1;
    });
  };

  const handleScroll = () => {
    if (!isDragging) return;

    const slider = sliderRef.current;

    if (slider) {
      const slideItemWidth = slider.children[0].clientWidth;
      const slidePosition = slider.scrollLeft;
      setCurrentPos(Math.round(slidePosition / slideItemWidth));
    }
  };

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
            <img src={url} alt={alt} className="size-full object-cover" />
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
