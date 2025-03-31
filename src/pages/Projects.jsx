import React, { useEffect, useRef } from "react";
import { projects } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Projects = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.params.navigation.prevEl = ".custom-prev";
      swiper.params.navigation.nextEl = ".custom-next";
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);
  return (
    <div className=" text-white relative">
      <div className="px-3 py-5 md:px-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-3">
          Our Projects
        </h1>
        <p className="mt-4 text-white/70 text-lg md:text-xl max-w-2xl">
          Pushing the boundaries of technology with innovative solutions that
          shape the future.
        </p>
      </div>
      <div className="px-3 md:px-16 pb-16 relative z-20 h-[500px]">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {projects.map(
            ({ id, image, title, icon: Icon, category, description }) => (
              <SwiperSlide key={id}>
                <div className="group relative h-[500px] bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                        <Icon className="w-6 h-6" />
                        <span className="ml-2">{category}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                      {title}
                    </h3>
                    <p className="text-blue-400 text-sm">{description}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>

        <button className="custom-prev absolute left-[-30px] md:left-[-50px] top-1/2 -translate-y-1/2  text-white text-3xl p-3 rounded-full hover:text-white-/70">
          ❮
        </button>
        <button className="custom-next absolute right-[-30px] md:right-[-50px] top-1/2 -translate-y-1/2  text-white text-3xl p-3 rounded-full hover:text-white-/70">
          ❯
        </button>
      </div>

      <img
        src="/imgs/projects/proj-bg.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full opacity-40"
      />
    </div>
  );
};

export default Projects;
