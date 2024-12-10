"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const NossaMissao = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/tela-sustentavel");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-center mb-9 mt-24">
        <h2 className="font-lastri text-[48px]">Nossa Missão</h2>
      </div>
      <div className="bg-[url('../Assets/Img/BannerSustentabilidade.png')] bg-cover bg-center  w-full h-screen">
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
