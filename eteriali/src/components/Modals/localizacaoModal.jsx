import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import LojaFisica from "@/Assets/Img/LojaFisica.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

export default function LocalizacaoModal({
  isOpen,
  setIsOpen,
  afterOpenModal,
  closeModal,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col w-3/6 h-[75%]">
        <div className="flex flex-col items-center bg-white shadow-xl h-full">
          <div className="flex w-full">
            <div className="flex items-center pl-2 w-12">
              <button onClick={() => setIsOpen(false)} className=" ">
                <IoIosClose className="w-8 h-8" />
              </button>
            </div>
            <div className="flex w-full justify-center pr-11">
              <h1 className="font-lastri text-[36px]">Localidade</h1>
            </div>
          </div>
          <Image src={LojaFisica} alt="Imagem da loja fisica da Eteriali" />
          <p className="font-sulphur">
            Av. Fênix - Morada das Flores Aldeia da Serra, Barueri - SP
          </p>
          <div>
            <p className="font-sulphur text-[24px] my-8">Entre em contato</p>
          </div>
          <div className="border border-black w-full border-t-[1px]"></div>
          <div className="flex flex-row items-center justify-center gap-12 w-full my-6">
            <FaWhatsapp className="w-12 h-12" />
            <FaFacebook className="w-12 h-12" />
            <FaInstagram className="w-12 h-12" />
            <MdEmail className="w-12 h-12" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
