import { useEffect, useState } from "react";
import Button from "./Button";
type Props = {
  images?: string[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
};
function Carousel({
  images = [],
  autoplay = false,
  autoplayInterval = 4000,
  className,
}: Props) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [current, autoplay, autoplayInterval]);
  return (
    <div className={`relative h-full  w-full mx-auto overflow-hidden    ${className}`}>
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Button */}
      <Button
        variant="text"
        onclick={prevSlide}
        className="absolute top-1/2 left-4  -translate-y-1/2  "
      >
        <i className="pi pi-angle-left text-4xl text-white font-bold" />
      </Button>

      {/* Right Button */}
      <Button
        variant="text"
        onclick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2"
      >
        <i className="pi pi-angle-right text-4xl text-white font-bold" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
