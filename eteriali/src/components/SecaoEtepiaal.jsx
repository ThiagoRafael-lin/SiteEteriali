"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonOutline } from "./Button";

export const SecaoEtepiaal = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/tela-produto");
    console.log("botao cliackdo");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-center mb-9 mt-24">
        <h2 className="font-lastri text-[48px]">Coleção Etepiaal</h2>
      </div>

      <div className="bg-[url('../Assets/Img/BannerHome.png')] bg-cover bg-center  w-full h-screen">
        <div className=" flex flex-col items-end justify-end h-full pb-4 pr-4">
          <div>
            <h2 className="text-[64px] text-white font-lastri w-72 text-end leading-none mb-8">
              Joias Eternas
            </h2>
          </div>
          <div className="flex flex-row gap-12">
            <button
              className="flex items-center justify-center w-[300px] h-[55px] text-[28px] font-sulphur bg-[#BA9D53] text-white"
              onClick={handleButtonClick}
              children={"Ver coleção"}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
