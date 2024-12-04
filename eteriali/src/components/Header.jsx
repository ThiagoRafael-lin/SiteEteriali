import Image from "next/image";
import Logo from "../Assets/Img/LogoBranco.png";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="bg-[url('../Assets/Img/BannerHome.png')] bg-cover bg-center w-full h-screen">
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
          <Image src={Logo} alt="Logo da eteriali" />
        </div>
        <div className="flex w-full justify-end">
          <Button children={"Login"} />
        </div>
      </div>
    </div>
  );
};
