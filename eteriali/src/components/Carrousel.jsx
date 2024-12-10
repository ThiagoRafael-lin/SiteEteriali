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
              <h2 className="text-[48px] font-lastri">Memória Luminosa</h2>
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
              <h2 className="text-[48px] font-lastri">Alma Atemporal</h2>
              <p className="leading-5 font-sulphur mb-4">
                Nosso anel de diamante eterno é mais do que uma peça de luxo. É
                um tesouro personalizado, criado com o amor e a memória de
                alguém especial. Cada diamante, cuidadosamente elaborado a
                partir de materiais orgânicos, guarda a essência única de quem
                você ama, tornando essa joia uma relíquia inestimável para
                celebrar um amor eterno.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image src={terceiraImagemCarrousel} alt="Um brinco de diamante" />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Paixão Atemporal</h2>
              <p className="leading-5 font-sulphur mb-4">
                Personalize seus brincos de diamante eterno e eternize a memória
                de quem você ama. Cada detalhe, desde a escolha do design até a
                seleção dos materiais, é pensado para criar uma peça única e
                cheia de significado.
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
              <h2 className="text-[48px] font-lastri">Coração do Oceano</h2>
              <p className="leading-5 font-sulphur mb-4">
                Um diamante que brilha tanto quanto o seu amor. Ele captura a
                essência da paixão eterna, prometendo um amor duradouro e
                intenso.
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
              <h2 className="text-[48px] font-lastri">Estrela Polar</h2>
              <p className="leading-5 font-sulphur mb-4">
                Uma joia que pulsa com a sua alma. Este anel, esculpido com amor
                e dedicação, é mais do que um acessório, cada curva, cada
                detalhe, foi pensado para que ele tenha um significado único
                criando uma peça que te conecta com sua essência.
              </p>
              <Button onClick={handleButtonClick} children={"Ver Produto"} />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center gap-11">
            <Image src={sextaImagemCarrousel} alt="Um brinco de esmeralda" />
            <div className="flex flex-col max-w-lg items-start justify-center">
              <h2 className="text-[48px] font-lastri">Céu Estrelado</h2>
              <p className="leading-5 font-sulphur mb-4">
                Um brilho eterno, um legado de amor. Nosso brinco de diamante é
                uma joia única, criada com amor e dedicação. Cada diamante é
                cuidadosamente selecionado e trabalhado para capturar a essência
                daqueles que você ama. Use-o como um símbolo de sua conexão
                eterna com seu ente querido.
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
