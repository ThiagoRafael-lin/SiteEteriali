"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";
import BannerSustentabilidade from "@/Assets/Img/BannerSustentabilidade.png";
import Image from "next/image";

export const NossaMissao = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/tela-sustentavel");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-center mb-9 mt-24 max-sm:mt-8">
        <h2 className="font-lastri text-[48px] max-sm:text-[32px]">
          Nossa Missão
        </h2>
      </div>
      <Image
        className="md:hidden w-full h-52"
        src={BannerSustentabilidade}
        alt="Imagem do oceano"
      />

      <div className="max-sm:flex max-sm:flex-col max-sm:items-center gap-4">
        <div className="md:hidden pt-4">
          <h2 className="text-[64px] text-black font-lastri w-72 leading-none max-sm:text-[24px] max-sm:text-center">
            Sustentábilidade
          </h2>
        </div>
        <div className="flex flex-row gap-12 max-sm:w-36 md:hidden">
          <Button
            onClick={handleButtonClick}
            styles="w-[300px] h-[35px] text-[28px] max-sm:text-[14px] max-sm:mb-8"
            children={"Entenda mais"}
          />
        </div>
      </div>

      <div className="bg-[url('../Assets/Img/BannerSustentabilidade.png')] bg-cover bg-center  w-full h-screen max-sm:hidden">
        <div className=" flex flex-col items-end justify-end h-full pb-4 pr-4">
          <div>
            <h2 className="text-[64px] text-white font-lastri w-72 text-end leading-none mb-8 mr-6">
              Sustentá bilidade
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
