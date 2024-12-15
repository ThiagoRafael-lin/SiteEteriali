import Image from "next/image";
import Logo from "../Assets/Img/LogoBranco.png";
import PinterestIcon from "@/Assets/Icons/PinterestIcon.png";
import YouTubeIcon from "@/Assets/Icons/YouTubeIcon.png";
import InstagramIcon from "@/Assets/Icons/InstagramIcon.png";
import FacebookIcon from "@/Assets/Icons/FacebookIcon.png";
import EmailIcon from "@/Assets/Icons/EmailIcon.png";
import WhatsappIcon from "@/Assets/Icons/WhatsappIcon.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export const Footer = () => {
  return (
    // NAVEGAÇÃO DESKTOP
    <div className="flex flex-row items-center justify-between bg-[#1C2730] w-full max-h-96 max-sm:flex max-sm:flex-col max-sm:max-h-full max-sm:items-center max-sm:gap-12">
      <div className="flex flex-col items-center p-12 h-full font-sulphur max-sm:items-center max-sm:py-8 max-sm:hidden">
        <div className="flex items-center justify-center">
          <Image className="w-[122px] mb-4" src={Logo} alt="Logo da eteriali" />
        </div>
        <div className="flex flex-col items-start text-white gap-2 max-sm:items-center">
          <div>Rua Cardeal Arcoverde</div>
          <div>Pinheiros, São Paulo</div>
          <div>SP, 05408-002</div>
          <div className="flex flex-row justify-between w-full items-center">
            <div>
              <a href="https://br.pinterest.com/eteriali/">
                <FaPinterestP />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCkVVcspTj9KsEIE2cCboFQg">
                <FaYoutube />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/eteriali_diamantes/">
                <FaInstagram />
              </a>
            </div>
            {/* <div>
              <FaFacebook />
            </div> */}
            {/* <div>
              <MdEmail />
            </div> */}
            <div>
              <a href="https://wa.me/5511998765432?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20informações">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-white p-12 h-full font-sulphur max-sm:items-center max-sm:p-0 max-sm:pt-8">
        <div className="text-[24px] mb-4">Páginas</div>
        <div className="flex flex-col items-start text-[14px] gap-2 max-sm:items-center">
          <Link
            href="/tela-produtos"
            className="font-sulphur hover:opacity-35 transition-all"
          >
            Produto
          </Link>
          <Link
            href="/tela-sustentavel"
            className="font-sulphur hover:opacity-35 transition-all"
          >
            Sustentável
          </Link>
          <Link
            href="/tela-sobre"
            className="font-sulphur hover:opacity-35 transition-all"
          >
            Sobre
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start text-white p-12 font-sulphur max-sm:items-center max-sm:p-0">
        <div className="text-[24px] mb-4">Entre em contato</div>
        <div className="flex flex-col items-startwhite text-[14px] gap-2 max-sm:items-center">
          <div>Segunda - Sábado</div>
          <div>10:00 as 18:00</div>
          <div>eteriali@gmail.com</div>
        </div>
      </div>

      {/* NAVEGAÇÃO MOBILE */}
      <div className="flex flex-col items-center p-12 h-full font-sulphur max-sm:items-center max-sm:py-8 md:hidden max-sm:pt-0">
        <div className="flex items-center justify-center">
          <Image className="w-[122px] mb-4" src={Logo} alt="Logo da eteriali" />
        </div>
        <div className="flex flex-col items-start text-white gap-2 max-sm:items-center">
          <div>Rua Cardeal Arcoverde</div>
          <div>Pinheiros, São Paulo</div>
          <div>SP, 05408-002</div>
          <div className="flex flex-row justify-between w-full items-center">
            <div>
              <a href="https://br.pinterest.com/eteriali/">
                <FaPinterestP />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCkVVcspTj9KsEIE2cCboFQg">
                <FaYoutube />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/eteriali_diamantes/">
                <FaInstagram />
              </a>
            </div>
            {/* <div>
              <a href="">
                <FaFacebook />
              </a>
            </div> */}
            {/* <div>
              <a href="">
                <MdEmail />
              </a>
            </div> */}
            <div>
              <a href="https://wa.me/5511998765432?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20informações">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
