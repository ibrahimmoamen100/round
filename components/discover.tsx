"use client";
import React, { useState, useRef } from "react";
import { z } from "zod";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const discoverSchema = z.array(
  z.object({
    title: z.string(),
    image: z.string(),
  })
);

type schemaForm = z.infer<typeof discoverSchema>;

function Discover({ data }: { data: schemaForm }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleBulletClick = (index: number) => {
    setActiveIndex(index);

    // Scroll the corresponding item into view
    carouselRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div className="flex flex-col gap-2 max-w-7xl md:mx-auto my-12 mx-2">
      <h2 className="text-center font-bold text-main_dark text-2xl ">
        استكشف الوجهات
      </h2>
      <p className="text-center text-gray-500 font-bold">
        استمتع بأستكشاف الرحلات الممتعه معنا
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative max-w-5xl m-auto"
      >
        <CarouselContent className="flex flex-row md:gap-4 gap-4 m-auto my-8 overflow-x-visible scroll-smooth">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              ref={(el: HTMLDivElement | null) => {
                carouselRefs.current[index] = el;
              }}
              className={`md:basis-1/2 lg:basis-1/5 flex flex-col items-center md:gap-4 gap-1 group ${
                activeIndex === index ? "opacity-100" : "opacity-85"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-3xl border-8 border-[#e6f8ff] transform transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-sm text-main_dark font-bold">
                {item.title}
              </span>
            </CarouselItem>
          ))}{" "}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-4 gap-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBulletClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-main_dark" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Discover;
