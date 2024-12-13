"use client";

import Image from "next/image";
import * as React from "react";
import primeiraImagemCarrousel from "@/Assets/Img/FotoJoias/ColarPedraBranca.png";
import segundaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraBranca.png";
import terceiraImagemCarrousel from "@/Assets/Img/FotoJoias/BrincoPedraBranca.png";
import quartaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraAzul.png";
import quintaImagemCarrousel from "@/Assets/Img/FotoJoias/AnelPedraBranca2.png";
import sextaImagemCarrousel from "@/Assets/Img/FotoJoias/BrincoPedraVerde.png";

import primeiraImagem from "@/Assets/Img/FotoJoias/AnelPedraBranca.png";
import segundaImagem from "@/Assets/Img/FotoJoias/AnelPedraAzulnovo.png";
import terceiraImagem from "@/Assets/Img/FotoJoias/AnelPedraBranca2.png";
import quartaImagem from "@/Assets/Img/FotoJoias/ColarPedraBranca.png";
import quintaImagem from "@/Assets/Img/FotoJoias/BrincoPedraVerde.png";
import sextaImagem from "@/Assets/Img/FotoJoias/BrincoPedraBranca.png";

import TresAneis from "@/Assets/Img/FotoJoias/TresAneis.png";
import CaixaComAnelDentro from "@/Assets/Img/FotoJoias/CaixaComAnelDentro.png";
import DiamanteSozinho from "@/Assets/Img/FotoJoias/DiamanteSozinho.png";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LocalizacaoModal from "@/components/Modals/localizacaoModal";

export default function TelaProduto({ id }) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const imagensLumina = [
    { id: 1, src: TresAneis, alt: "3 aneis" },
    {
      id: 2,
      src: CaixaComAnelDentro,
      alt: "Uma caixa preta com um anel dentro",
    },
    { id: 3, src: DiamanteSozinho, alt: "Um diamante" },
    { id: 4, src: TresAneis, alt: "3 aneis" },
    {
      id: 5,
      src: CaixaComAnelDentro,
      alt: "Uma caixa preta com um anel dentro",
    },
    { id: 6, src: DiamanteSozinho, alt: "Um diamante" },
  ];

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (modalIsOpen) {
      console.log("Modal está aberto!");
    }
  }, [modalIsOpen]);

  function openModal() {
    setModalIsOpen(true);
    console.log("botão clicado");
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-20 mt-20 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-8">
        <Image
          className="w-96 max-sm:w-64"
          src={primeiraImagemCarrousel}
          alt="Um colar de diamante"
        />
        <div className="flex flex-col max-w-lg items-start justify-center max-sm:items-center">
          <h2 className="text-[48px] font-lastri max-sm:text-[20px]">
            Memória Luminosa
          </h2>
          <p className="leading-5 font-sulphur mb-4 max-sm:text-[16px] max-sm:text-center max-sm:p-4 ">
            Imagine um colar que vai além de uma simples joia. Um colar que
            carrega consigo a essência de um ente querido, transformada em uma
            peça única e atemporal. Uma criação que homenageia a vida e o amor,
            perpetuando a lembrança daqueles que amamos.
          </p>
          <Button onClick={openModal} children={"Entre em contato"} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-24">
        <h2 className="font-lastri text-[40px]">Lumina</h2>
        <p className="font-sulphur text-[16px]">
          Um vislumbre do que está por vir
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="flex max-w-6xl mx-auto justify-center items-center border-black py-12"
      >
        <CarouselContent>
          {imagensLumina.map((image) => (
            <CarouselItem
              key={image.id}
              className="md:basis-1/2 lg:basis-1/3 max-sm:flex max-sm:items-center max-sm:justify-center"
            >
              <div className="p-1">
                <span className="text-3xl font-semibold">
                  <Image
                    className="w-96 max-sm:w-80"
                    src={image.src}
                    alt={image.alt}
                  />
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

      <LocalizacaoModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
