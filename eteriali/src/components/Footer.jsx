import Image from "next/image";
import Logo from "../Assets/Img/LogoBranco.png";

export const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-[#1C2730] mt-24 w-full max-h-96">
      <div className="flex flex-col items-center p-12 h-full font-sulphur">
        <div className="flex items-center justify-center">
          <Image className="w-[122px] mb-4" src={Logo} alt="Logo da eteriali" />
        </div>
        <div className="flex flex-col items-start text-white gap-2">
          <div>Rua Cardeal Arcoverde</div>
          <div>Pinheiros, São Paulo</div>
          <div>SP, 05408-002</div>
        </div>
      </div>

      <div className="flex flex-col items-start text-white p-12 h-full font-sulphur">
        <div className="text-[24px] mb-4">Páginas</div>
        <div className="flex flex-col items-start text-[14px] justify- gap-2">
          <div>Produto</div>
          <div>Sustentável</div>
          <div>Sobre</div>
        </div>
      </div>

      <div className="flex flex-col items-start text-white p-12 font-sulphur">
        <div className="text-[24px] mb-4">Entre em contato</div>
        <div className="flex flex-col items-startwhite text-[14px] gap-2">
          <div>Segunda - Sábado</div>
          <div>10:00 as 18:00</div>
          <div>eteriali@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
