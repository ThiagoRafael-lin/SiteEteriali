"use client";

import Image from "next/image";
import Logo from "../Assets/Img/LogoBranco.png";
import LogoPreto from "../Assets/Img/LogoPreto.png";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const HeaderDefault = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/");
    console.log("botao clicado");
  };

  return (
    <nav className="flex flex-row items-center justify-between px-12 my-6">
      <ul className="flex flex-row gap-20 text-[15px] text-balck w-full">
        <Link href="/tela-produtos" className="font-sulphur">
          Produto
        </Link>
        <Link href="/tela-sustentavel" className="font-sulphur">
          Sustentável
        </Link>
        <Link href="/tela-sobre" className="font-sulphur">
          Sobre
        </Link>
      </ul>
      <div className="flex justify-center w-full">
        <Image
          onClick={handleButtonClick}
          src={LogoPreto}
          alt="Logo da eteriali"
        />
      </div>
    </nav>
  );
};

export const HeaderHome = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/");
    console.log("botao clicado");
  };
  return (
    <nav className="bg-[url('../Assets/Img/BannerHome.png')] bg-cover bg-center w-full h-screen pt-6">
      <ul className="flex flex-row items-center justify-between px-12">
        <div className="flex flex-row gap-20 text-[15px] text-white">
          <Link href="/tela-produtos" className="font-sulphur">
            Produto
          </Link>
          <Link href="/tela-sustentavel" className="font-sulphur">
            Sustentável
          </Link>
          <Link href="/tela-sobre" className="font-sulphur">
            Sobre
          </Link>
        </div>
        <div className="flex justify-center pr-72 w-full">
          <Image
            onClick={handleButtonClick}
            src={Logo}
            alt="Logo da eteriali"
          />
        </div>
      </ul>
    </nav>
  );
};
