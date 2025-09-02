import { useState, useEffect } from "react";
import Card from "./Card";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";

export const CostumersSection = ({ img_path, title }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = img_path.length;

  const prevCard = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const nextCard = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-medium text-center">{title}</h1>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevCard}
          className="px-4 py-2 text-gray-600 text-3xl hover:text-purple-500"
        >
          <BiChevronLeftCircle size={30} />
        </button>
        <div
          className={`transition-all duration-500 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <Card
            img_path={img_path[current].img}
            description={img_path[current].description}
            index={current}
          />
        </div>
        <button
          onClick={nextCard}
          className="px-4 py-2 text-gray-600 text-3xl hover:text-purple-500"
        >
          <BiChevronRightCircle size={30} />
        </button>
      </div>
      <div className="text-center mt-2 flex justify-center gap-2">
        {img_path.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-purple-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};