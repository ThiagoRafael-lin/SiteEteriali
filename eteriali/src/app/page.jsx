"use client";

import { Button } from "@/components/Button";
import { Carrousel } from "@/components/Carrousel";
import { NossaMissao } from "@/components/NossaMissao";
import { SecaoEtepiaal } from "@/components/SecaoEtepiaal";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/tela-sobre");
    console.log("Botão clicado");
  };

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-col items-center mt-28 mb-36 max-sm:w-screen max-sm:my-12">
        <div className="">
          <h1 className="font-lastri text-[48px] mb-6 max-sm:text-[32px] max-sm:w-full ">
            O que é Eteriali
          </h1>
        </div>
        <div className="flex flex-row gap-4 w-[766px] justify-center max-sm:w-screen">
          <Button
            onClick={handleButtonClick}
            styles="w-[328px] text-[20px] max-sm:w-[200px] max-sm:text-[18px]"
            children={"Conheça a gente"}
          />
        </div>
      </div>
      <Carrousel />
      <SecaoEtepiaal />
      <div className="border border-gray w-screen max-w-6xl border-t-[1px]" />
      <NossaMissao />
    </div>
  );
}
