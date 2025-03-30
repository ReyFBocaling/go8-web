import { useState, useEffect } from "react";
import { exp1, exp2, exp3, exp4, exp5, exp6, exp7 } from "../assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Expertise = () => {
  const slides = [
    { url: exp1, title: "Enterprise Resource Planning" },
    { url: exp2, title: "Telecom" },
    { url: exp3, title: "Data Management System" },
    { url: exp4, title: "Hotel and Restaurant Management" },
    { url: exp5, title: "Financial Technology (FinTech)" },
    { url: exp6, title: "Game Development" },
    { url: exp7, title: "Blockchain" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 3000);
    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  return (
    <div className="w-full md:h-full  pt-5 overflow-hidden">
      <h1 className="text-5xl font-bold text-gradient">Industry Expertise</h1>

      <div className="relative group max-w-[1500px] md:h-[566px] mx-auto py-10">
        <div className="w-full h-full relative overflow-hidden">
          {/* Slides container */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 rounded-2xl"
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <div
            className="absolute top-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer z-10 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft size={30} />
          </div>

          {/* Right Arrow */}
          <div
            className="absolute top-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer z-10 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight size={30} />
          </div>

          {/* Slide Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer p-1 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#2669FF] scale-125"
                    : "bg-black opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
