import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import LojaFisica from "@/Assets/Img/LojaFisica.png";
import LojaPinheiros from "@/Assets/Img/lojaPinheiros.png";

export const CarrouselModal = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="flex w-full max-w-6xl mx-auto justify-center items-center border-black"
      >
        <CarouselContent>
          <CarouselItem className="flex flex-col items-center justify-center">
            <Image src={LojaFisica} alt="Imagem da loja fisica da Eteriali" />
            <div className="flex flex-col items-start justify-center">
              <p className="font-sulphur">
                Av. Fênix - Morada das Flores Aldeia da Serra, Barueri - SP
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-center">
            <Image
              className=""
              src={LojaPinheiros}
              alt="Imagem da loja fisica da Eteriali"
            />
            <div className="flex flex-col items-start justify-center">
              <p className="font-sulphur">
                Av. Fênix - Morada das Flores Aldeia da Serra, Barueri - SP
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-center">
            <Image src={LojaFisica} alt="Imagem da loja fisica da Eteriali" />
            <div className="flex flex-col items-start justify-center">
              <p className="font-sulphur">
                Av. Fênix - Morada das Flores Aldeia da Serra, Barueri - SP
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center justify-center">
            <Image src={LojaFisica} alt="Imagem da loja fisica da Eteriali" />
            <div className="flex flex-col items-start justify-center">
              <p className="font-sulphur">
                Av. Fênix - Morada das Flores Aldeia da Serra, Barueri - SP
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
