"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import primeiraImagem from "@/Assets/Img/FotoJoias/AnelPedraBranca.png";
import segundaImagem from "@/Assets/Img/FotoJoias/AnelPedraAzulnovo.png";
import terceiraImagem from "@/Assets/Img/FotoJoias/AnelPedraBranca2.png";
import quartaImagem from "@/Assets/Img/FotoJoias/ColarPedraBranca.png";
import quintaImagem from "@/Assets/Img/FotoJoias/BrincoPedraVerde.png";
import sextaImagem from "@/Assets/Img/FotoJoias/BrincoPedraBranca.png";
import { Button } from "./Button";

export const SecaoEtepiaal = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/tela-produtos");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-center mb-9 mt-24">
        <h2 className="font-lastri text-[48px]">Coleção Etepiaal</h2>
      </div>

      <div className="bg-[url('../Assets/Img/BannerSecaoEtepiaal.png')] bg-cover bg-center  w-full h-screen">
        <div className=" flex flex-col items-end justify-end h-full pb-4 pr-4">
          <div>
            <h2 className="text-[64px] text-white font-lastri w-72 text-end leading-none mb-8">
              Joias Eternas
            </h2>
          </div>
          <div className="flex flex-row gap-12">
            <Button
              onClick={handleButtonClick}
              styles="w-[300px] h-[55px] text-[28px]"
              children={"Entenda mais"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecaoEtepiaalProdutos = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center mb-9 mt-24">
        <h2 className="font-lastri text-[48px]">Coleção Etepiaal</h2>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 justify-between">
          <div className="flex flex-col gap-1 w-full">
            <Image
              className="w-full"
              src={primeiraImagem}
              alt="Um anel de diamante"
            />
            <Image
              className=" w-full"
              src={terceiraImagem}
              alt="Um anel de diamante"
            />
          </div>
          <div className="flex flex-col w-full">
            <Image
              className="h-full w-full"
              src={segundaImagem}
              alt="Um anel com uma saphira"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1 mb-1">
          <Image
            className="w-[33.1%]"
            src={quartaImagem}
            alt="Um colar de diamante"
          />
          <Image
            className="w-[33.1%]"
            src={quintaImagem}
            alt="Um brinco de esmeralda"
          />
          <Image
            className="w-[33.1%]"
            src={sextaImagem}
            alt="Um brinco de diamante"
          />
        </div>
      </div>
    </div>
  );
};
