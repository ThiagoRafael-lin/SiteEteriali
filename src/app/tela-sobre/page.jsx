import Image from "next/image";
import InstagramIcon from "@/Assets/Icons/InstagramiconPreto.png";
import FacebookIcon from "@/Assets/Icons/FacebookIconPreto.png";
import EmailIcon from "@/Assets/Icons/EmailIconPreto.png";
import WhatsappIcon from "@/Assets/Icons/WhatsappIconPreto.png";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function TelaSobre() {
  return (
    // SOBRE DESKTOP
    <div>
      <div className="flex flex-col items-center justify-center w-full mb-14 mt-32 max-sm:mt-12 ">
        <p className="font-sulphur text-[24px] w-3/4 text-center max-sm:text-[16px]">
          Em um mundo acelerado, buscamos preservar os momentos mais preciosos.
          Nossas joias são mais do que acessórios, são tesouros que carregam
          consigo histórias e emoções. Transformamos cinzas e cabelos em
          diamantes eternos, criando peças únicas e personalizadas que celebram
          a vida e o amor.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 mb-40 mt-32 max-sm:hidden">
        {/* <MdOutlineEmail className="w-12 h-12" /> */}
        <a href="https://www.instagram.com/eteriali_diamantes/">
          <FaInstagram className="w-12 h-12" />
        </a>
        <p className="text-[28px]">@eteriali_diamantes</p>
        <a href="https://wa.me/5511998765432?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20informações">
          <FaWhatsapp className="w-12 h-12" />
        </a>
        {/* <RiFacebookCircleLine className="w-12 h-12" /> */}
      </div>

      {/* SOBRE MOBILE */}
      <div className="flex items-center justify-center gap-5 mb-40 mt-32 md:hidden max-sm:flex-col max-sm:mt-12 max-sm:mb-12">
        <p className="text-[28px] max-sm:text-[20px]">@eteriali_diamantes</p>
        <div className="flex gap-6">
          {/* <a href="">
            <MdOutlineEmail className="w-12 h-12 max-sm:w-8 max-sm:h-8" />
          </a> */}
          <a href="https://www.instagram.com/eteriali_diamantes/">
            <FaInstagram className="w-12 h-12 max-sm:w-8 max-sm:h-8" />
          </a>
          <a href="https://wa.me/5511998765432?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20informações">
            <FaWhatsapp className="w-12 h-12 max-sm:w-8 max-sm:h-8" />
          </a>
          {/* <a href="">
            <RiFacebookCircleLine className="w-12 h-12 max-sm:w-8 max-sm:h-8" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
