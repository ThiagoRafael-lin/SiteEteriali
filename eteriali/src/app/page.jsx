import { Button } from "@/Components/Button";
import { Carrousel } from "@/Components/Carrousel";
import { HeaderHome } from "@/components/Header";
import { NossaMissao } from "@/components/NossaMissao";
import { SecaoEtepiaal } from "@/components/SecaoEtepiaal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-col items-center mt-28 mb-36">
        <div>
          <h1 className="font-lastri text-[48px] mb-6">O que é Eteriali</h1>
        </div>
        <div className="flex flex-row gap-4 w-[766px] justify-between">
          <Button
            styles="w-[328px] text-[20px]"
            children={"Conheça nosso trabalho"}
          />

          <Button styles="w-[328px] text-[20px]" children={"Conheça a gente"} />
        </div>
      </div>
      <Carrousel />
      <SecaoEtepiaal />
      <NossaMissao />
    </div>
  );
}
