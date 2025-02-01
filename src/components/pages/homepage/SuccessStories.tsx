"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel"; // Import CarouselApi type
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const SuccessStories = () => {
  const [api, setApi] = useState<CarouselApi>(); // State to hold the Carousel API
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className="h-auto w-[500px]"
              src="/success-company-logo.png"
              alt="Logo"
              height={200}
              width={160}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">SMASCO Success Story:</h6>
            <p>
              Started business with a supply in April 2018 and increased the
              number of workers by 800%, all of them are currently active.
              Monthly revenue increased by 1000% from April 2018 to October
              2022.
            </p>
            <ul className="list-disc pl-5">
              <li>Managed to deploy skilled and semi-skilled workers.</li>
              <li>Became one of our most satisfied clients.</li>
            </ul>
            <p>Highest worker satisfaction and a low worker turnover rate.</p>
            <h6 className="font-bold">BAYTUR Success Story:</h6>
            <ul className="list-disc pl-5">
              <li>
                Completed the project of Renovating King Abdullah University of
                Science and Technology (KAUST) and secured a new construction
                project in the same place.
              </li>
              <li>
                Awarding new projects in Neom and King Abdullah Financial
                District, Riyadh.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className="h-auto w-[500px]"
              src="/success-company-logo.png"
              alt="Logo"
              height={200}
              width={160}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">SMASCO Success Story:</h6>
            <p>
              Started business with a supply in April 2018 and increased the
              number of workers by 800%, all of them are currently active.
              Monthly revenue increased by 1000% from April 2018 to October
              2022.
            </p>
            <ul className="list-disc pl-5">
              <li>Managed to deploy skilled and semi-skilled workers.</li>
              <li>Became one of our most satisfied clients.</li>
            </ul>
            <p>Highest worker satisfaction and a low worker turnover rate.</p>
            <h6 className="font-bold">BAYTUR Success Story:</h6>
            <ul className="list-disc pl-5">
              <li>
                Completed the project of Renovating King Abdullah University of
                Science and Technology (KAUST) and secured a new construction
                project in the same place.
              </li>
              <li>
                Awarding new projects in Neom and King Abdullah Financial
                District, Riyadh.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className="h-auto w-[500px]"
              src="/success-company-logo.png"
              alt="Logo"
              height={200}
              width={160}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">SMASCO Success Story:</h6>
            <p>
              Started business with a supply in April 2018 and increased the
              number of workers by 800%, all of them are currently active.
              Monthly revenue increased by 1000% from April 2018 to October
              2022.
            </p>
            <ul className="list-disc pl-5">
              <li>Managed to deploy skilled and semi-skilled workers.</li>
              <li>Became one of our most satisfied clients.</li>
            </ul>
            <p>Highest worker satisfaction and a low worker turnover rate.</p>
            <h6 className="font-bold">BAYTUR Success Story:</h6>
            <ul className="list-disc pl-5">
              <li>
                Completed the project of Renovating King Abdullah University of
                Science and Technology (KAUST) and secured a new construction
                project in the same place.
              </li>
              <li>
                Awarding new projects in Neom and King Abdullah Financial
                District, Riyadh.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  // Update the active index when the carousel changes
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Handle dot click to navigate to the corresponding slide
  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  // Handle previous and next navigation
  const handlePrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const handleNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Success Stories
          </div>
        </div>

        <div className="group relative mx-auto mt-20 max-w-4xl rounded-xl border p-10">
          <Carousel className="mx-5" setApi={setApi}>
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>{slide.content}</CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Arrow Buttons */}
          <button
            onClick={handlePrevious}
            className="pointer-events-none absolute left-0 top-1/2 mx-5 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <MdArrowBackIos className="text-4xl" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-none absolute right-0 top-1/2 mx-2 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <MdArrowForwardIos className="text-4xl" />
          </button>

          {/* Dot Navigation */}
          <div className="mt-10 flex justify-center space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`size-2 rounded-full ${
                  i === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
