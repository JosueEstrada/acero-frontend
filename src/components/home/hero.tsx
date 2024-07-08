"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroSection() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full "
    >
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-[500px] w-full overflow-hidden md:h-[600px] lg:h-[700px]">
            <Image
              alt="Carousel Image 1"
              className="h-full w-full object-cover"
              height={1080}
              src="/slide-acero.jpg"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
              <div className="rounded-md bg-black/40 px-6 py-4 text-center backdrop-blur-sm">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
                  TANQUES DE ACERO
                </h2>
                <p className="text-sm  md:text-base lg:text-lg">
                  AL CARBONO E INOXIDABLES DE ALTA RESISTENCIA
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[500px] w-full overflow-hidden md:h-[600px] lg:h-[700px]">
            <Image
              alt="Carousel Image 2"
              className="h-full w-full object-cover"
              height={1080}
              src="/slide-fibra.jpg"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
              <div className="rounded-md bg-black/40 px-6 py-4 text-center backdrop-blur-sm">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
                  TANQUES DE FIBRA DE VIDRIO
                </h2>
                <p className="text-sm  md:text-base lg:text-lg">
                  TANQUES ALTAMENTE RESISTENTES A GOLPES Y TRACCIONES
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[500px] w-full overflow-hidden md:h-[600px] lg:h-[700px]">
            <Image
              alt="Carousel Image 3"
              className="h-full w-full object-cover"
              height={1080}
              src="/slide-residual.jpg"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
              <div className="rounded-md bg-black/40 px-6 py-4 text-center backdrop-blur-sm">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
                  PLANTAS DE TRATAMIENTO
                </h2>
                <p className="text-sm  md:text-base lg:text-lg">
                  DE AGUA RESIDUAL PARA TODO TIPO DE PROCESOS
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2  transition-colors hover:text-gray-300">
        <ChevronLeftIcon className="h-8 w-8" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2  transition-colors hover:text-gray-300">
        <ChevronRightIcon className="h-8 w-8" />
      </CarouselNext>
    </Carousel>
  );
}
