"use client";

import Image from "next/image";
import Logo from "../Assets/Img/LogoBranco.png";
import LogoPreto from "../Assets/Img/LogoPreto.png";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const HeaderDefault = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/");
    console.log("botao clicado");
  };
  return (
    <div className="flex flex-row items-center justify-between px-12 my-6">
      <div className="flex flex-row gap-20 text-[15px] text-balck w-full">
        <a className="font-sulphur" href="">
          Produto
        </a>
        <a className="font-sulphur" href="">
          Sustentável
        </a>
        <a className="font-sulphur" href="">
          Sobre
        </a>
      </div>
      <div className="flex justify-center w-full">
        <Image
          onClick={handleButtonClick}
          src={LogoPreto}
          alt="Logo da eteriali"
        />
      </div>
      <div className="flex w-full justify-end">
        <Button children={"Login"} />
      </div>
    </div>
  );
};

export const HeaderHome = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/");
    console.log("botao clicado");
  };
  return (
    <div className="bg-[url('../Assets/Img/BannerHome.png')] bg-cover bg-center w-full h-screen pt-4">
      <div className="flex flex-row items-center justify-between px-12">
        <div className="flex flex-row gap-20 text-[15px] text-white w-full">
          <a className="font-sulphur" href="">
            Produto
          </a>
          <a className="font-sulphur" href="">
            Sustentável
          </a>
          <a className="font-sulphur" href="">
            Sobre
          </a>
        </div>
        <div className="flex justify-center w-full">
          <Image
            onClick={handleButtonClick}
            src={Logo}
            alt="Logo da eteriali"
          />
        </div>
        <div className="flex w-full justify-end">
          <Button children={"Login"} />
        </div>
      </div>
    </div>
  );
};
