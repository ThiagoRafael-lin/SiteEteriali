import Image from "next/image";
import React from "react";
import BannerWithText from "@/Assets/Img/BannerWithText.png";
import { SecaoEtepiaalProdutos } from "@/components/SecaoEtepiaal";

export default function TelaProdutos() {
  function ImageCard(src, alt, id) {
    const [imagemSelecionada, setImagemSelecionada] = React.useState(null);

    const ClickSelectImage = () => {
      setImagemSelecionada(id);
    };
  }

  return (
    <div>
      <Image
        className="w-full"
        src={BannerWithText}
        alt="Banner com uma joia azul e um texto"
      />
      <SecaoEtepiaalProdutos />
    </div>
  );
}
