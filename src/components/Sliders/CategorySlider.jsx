"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CategorySlider({ categories }) {
  const breakpoints = {
    320: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between gap-4">
        <h2 className="font-display text-xl mb-2 items-center">Categories</h2>
        <a
          href="/category"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          View All <ChevronRight className="inline-block w-4 h-4 text-accent" />
        </a>
      </div>

      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={6}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={breakpoints}
        navigation
        scrollbar={{ draggable: true }}
        style={{
          "--swiper-theme-color": "#f3f4f6",
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-sides-offset": "10px",
        }}
      >
        {categories.map((item, i) => (
          <SwiperSlide key={i} className="group">
            <a href={`/category/${item.slug}`} className="group">
              <div className="overflow-hidden rounded-lg border-accent-secondary border mb-2">
                <Image
                  src={`/category/${item?.image}`}
                  alt={item.title}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>

              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
