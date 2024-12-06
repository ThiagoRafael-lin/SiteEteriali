"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import * as React from "react";
import primeiraImagemCarrousel from "@/Assets/Img/FotoJoias/ColarPedraBranca.png";
import segundaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraBranca.png";
import terceiraImagemCarrousel from "@/Assets/Img/FotoJoias/BrincoPedraBranca.png";
import quartaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraAzul.png";
import quintaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraBranca2.png";
import sextaImagemCarrousel from "@/Assets/Img/FotoJoias/BrincoPedraVerde.png";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";

export const Carrousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/tela-produto");
    console.log("botao clicado");
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="border border-gray w-screen max-w-6xl border-t-[1px]"></div>
      <Carousel
        plugins={[plugin.current]}
        className="flex w-full max-w-6xl mx-auto justify-center items-center border-black py-12"
      >
        <CarouselContent className="">
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image src={primeiraImagemCarrousel} alt="Um colar de diamante" />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image src={segundaImagemCarrousel} alt="Um anel de diamante" />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image src={terceiraImagemCarrousel} alt="Um brinco de diamante" />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image
              className="w-[568px] h-[560px]"
              src={quartaImagemCarrousel}
              alt="Um diamante com uma safira"
            />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image
              className="w-[568px] h-[450px]"
              src={quintaImagemCarrousel}
              alt="Um anel de diamante"
            />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image src={sextaImagemCarrousel} alt="Um brinco de esmeralda" />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="border border-gray w-screen max-w-6xl border-t-[1px]"></div>
    </div>
  );
};
