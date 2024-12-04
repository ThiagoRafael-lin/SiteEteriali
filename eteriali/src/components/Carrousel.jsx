import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import primeiraImagemCarrousel from "@/Assets/Img/FotoJoias/ColarPedraBranca.png";
import segundaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraBranca.png";
import terceiraImagemCarrousel from "@/Assets/Img/FotoJoias/BrincoPedraBranca.png";
import quartaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraAzul.png";
import quintaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraBranca2.png";
import sextaImagemCarrousel from "@/Assets/Img/FotoJoias/BrincoPedraVerde.png";
import { Button } from "./Button";

export const Carrousel = () => {
  return (
    <div>
      <Carousel className="flex justify-center items-center border border-black py-12">
        <CarouselContent className="">
          <CarouselItem className="flex items-center justify-center gap-64">
            <Image src={primeiraImagemCarrousel} alt="Um colar de diamante" />
            <div className="flex flex-col w-[400px] items-start justify-center">
              <h2 className="text-[48px] font-lastri w- ">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-64">
            <Image src={segundaImagemCarrousel} alt="Um anel de diamante" />
            <div className="flex flex-col w-[400px] items-start justify-center">
              <h2 className="text-[48px] font-lastri w- ">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-64">
            <Image src={terceiraImagemCarrousel} alt="Um brinco de diamante" />
            <div className="flex flex-col w-[400px] items-start justify-center">
              <h2 className="text-[48px] font-lastri w- ">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-64">
            <Image
              className="w-[568px] h-[560px]"
              src={quartaImagemCarrousel}
              alt="Um diamante com uma safira"
            />
            <div className="flex flex-col w-[400px] items-start justify-center">
              <h2 className="text-[48px] font-lastri w- ">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-64">
            <Image
              className="w-[568px] h-[450px]"
              src={quintaImagemCarrousel}
              alt="Um anel de diamante"
            />
            <div className="flex flex-col w-[400px] items-start justify-center">
              <h2 className="text-[48px] font-lastri w- ">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-64">
            <Image src={sextaImagemCarrousel} alt="Um brinco de esmeralda" />
            <div className="flex flex-col w-[400px] items-start justify-center">
              <h2 className="text-[48px] font-lastri w- ">Colar eterno</h2>
              <p className="leading-5 font-sulphur mb-4">
                Imagine um colar que vai além de uma simples joia. Um colar que
                carrega consigo a essência de um ente querido, transformada em
                uma peça única e atemporal. Uma criação que homenageia a vida e
                o amor, perpetuando a lembrança daqueles que amamos.
              </p>
              <Button children={"Ver Produto"} />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
