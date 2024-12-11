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
      <div className="flex flex-col items-center mt-28 mb-36">
        <div>
          <h1 className="font-lastri text-[48px] mb-6">O que é Eteriali</h1>
        </div>
        <div className="flex flex-row gap-4 w-[766px] justify-center">
          <Button
            onClick={handleButtonClick}
            styles="w-[328px] text-[20px]"
            children={"Conheça a gente"}
          />
        </div>
      </div>
      <Carrousel />
      <SecaoEtepiaal />
      <NossaMissao />
    </div>
  );
}
