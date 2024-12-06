import Image from "next/image";
import React from "react";
import BannerWithText from "@/Assets/Img/BannerWithText.png";
import { SecaoEtepiaalProdutos } from "@/components/SecaoEtepiaal";

export default function TelaProdutos() {
  return (
    <div>
      <Image src={BannerWithText} alt="Banner com uma joia azul e um texto" />
      <SecaoEtepiaalProdutos />
    </div>
  );
}
