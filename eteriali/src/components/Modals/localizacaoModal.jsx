import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import LojaFisica from "@/Assets/Img/LojaFisica.png";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CarrouselModal } from "../CarrouselModal";

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
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center bg-white shadow-xl w-[700px] p-4 h-auto max-sm:w-auto max-sm:mx-4">
          <div className="flex items-center w-full">
            <button onClick={() => setIsOpen(false)}>
              <IoIosClose className="w-12 h-12" />
            </button>
          </div>
          <div className="flex w-full">
            <div className="flex w-full justify-center">
              <h1 className="font-lastri text-[36px]">Localidade</h1>
            </div>
          </div>
          <CarrouselModal />
          <div>
            <p className="font-sulphur text-[24px] pt-8 pb-4">
              Entre em contato
            </p>
          </div>
          <div className="border border-black w-full border-t-[1px]"></div>
          <div className="flex items-center justify-center gap-5 mt-4">
            {/* <MdOutlineEmail className="w-12 h-12" /> */}
            <a href="https://www.instagram.com/eteriali_diamantes/">
              <FaInstagram className="w-12 h-12" />
            </a>
            <a href="https://wa.me/5511998765432?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20informações">
              <FaWhatsapp className="w-12 h-12" />
            </a>
            {/* <RiFacebookCircleLine className="w-12 h-12" /> */}
          </div>
        </div>
      </div>
    </Modal>
  );
}
