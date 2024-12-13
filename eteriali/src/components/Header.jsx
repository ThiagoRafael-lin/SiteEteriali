"use client";

import Image from "next/image";
import Logo from "../Assets/Img/LogoBranco.png";
import LogoPreto from "../Assets/Img/LogoPreto.png";
import { Button, ButtonOutline } from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LocalizacaoModal from "./Modals/localizacaoModal";
import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import menuHamburguer from "@/Assets/Icons/menuHambuerguer.svg";
import BannerHeaderHome from "@/Assets/Img/BannerHome.png";
import LogoEterialiPictogramaPreto from "@/Assets/Img/LogoEterialiPictogramaPreto.png";

export const HeaderDefault = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/");
    console.log("botao clicado");
  };

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (modalIsOpen) {
      console.log("Modal está aberto!");
    }
  }, [modalIsOpen]);

  function openModal() {
    setModalIsOpen(true);
    console.log("botão clicado");
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {/* HEADER DESKTOP */}
      <nav className="flex flex-row items-center justify-between px-12 my-6 max-sm:hidden">
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
            onClick={() => router.push("/", { scroll: false })}
            src={LogoPreto}
            alt="Logo da eteriali"
          />
        </div>
        <div className="flex justify-end w-full ">
          <Button onClick={openModal} children="Loja fisica" styles="" />
        </div>
        <LocalizacaoModal
          isOpen={modalIsOpen}
          setIsOpen={setModalIsOpen}
          closeModal={closeModal}
        />
      </nav>

      {/* HEADER MOBILE */}
      <Drawer className="">
        <div className="flex w-full justify-end">
          <div className="flex justify-start items-center pl-4 w-full py-4 md:hidden">
            <Image
              className="w-20 h-10"
              src={LogoPreto}
              alt="Logo do eteriali"
              onClick={handleButtonClick}
            />
          </div>
          <div className="flex flex-col justify-end w-24 pr-4 py-4 md:hidden items-end">
            <DrawerTrigger className="">
              <div className="flex flex-row w-full justify-between">
                <Image
                  className="w-6"
                  src={menuHamburguer}
                  alt="menu hamburguer"
                />
              </div>
            </DrawerTrigger>
          </div>
        </div>
        <div>
          {/* <Image
            className="md:hidden"
            src={BannerHeaderHome}
            alt="Banner com um colar com uma joia"
          /> */}
        </div>
        <DrawerContent className="w-96">
          <DrawerHeader className="flex justify-end">
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center gap-4">
            <nav className="flex flex-row justify-between items-center w-full h-24 ">
              <Image
                onClick={handleButtonClick}
                src={LogoEterialiPictogramaPreto}
                alt="Logo da eteriali"
                className=" w-12 h-12"
              />
              <ul className="flex flex-col gap-4 items-center">
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
              <Image
                onClick={handleButtonClick}
                src={LogoEterialiPictogramaPreto}
                alt="Logo da eteriali"
                className=" w-12 h-12"
              />
            </nav>
            <Button onClick={openModal} children="Loja fisica" />
            <DrawerClose disabled className="flex gap-4"></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const HeaderHome = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/");
    console.log("botao clicado");
  };

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (modalIsOpen) {
      console.log("Modal está aberto!");
    }
  }, [modalIsOpen]);

  function openModal() {
    setModalIsOpen(true);
    console.log("botão clicado");
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {/* HEADER DESKTOP  */}
      <nav className="bg-[url('../Assets/Img/BannerHome.png')] bg-cover bg-center w-full h-screen pt-6 max-sm:hidden">
        <ul className="flex flex-row items-center justify-between px-12">
          <div className="flex flex-row gap-20 text-[15px] text-white w-full">
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
          <div className="flex justify-center w-full">
            <Image
              onClick={() => router.push("/", { scroll: false })}
              src={Logo}
              alt="Logo da eteriali"
            />
          </div>
          <div className="flex justify-end w-full ">
            <Button onClick={openModal} children="Loja fisica" styles="" />
          </div>
        </ul>
        <LocalizacaoModal
          isOpen={modalIsOpen}
          setIsOpen={setModalIsOpen}
          closeModal={closeModal}
        />
      </nav>

      {/* HEADER MOBILE */}
      <Drawer className="">
        <div className="flex w-full justify-end">
          <div className="flex justify-start items-center pl-4 w-full py-4">
            <Image
              className="w-20 h-10 md:hidden"
              src={LogoPreto}
              alt="Logo do eteriali"
              onClick={handleButtonClick}
            />
          </div>
          <div className="flex flex-col justify-end w-24 pr-4 py-4 md:hidden items-end">
            <DrawerTrigger className="">
              <div className="flex flex-row w-full justify-between">
                <Image
                  className="w-6"
                  src={menuHamburguer}
                  alt="menu hamburguer"
                />
              </div>
            </DrawerTrigger>
          </div>
        </div>
        <div>
          <Image
            className="md:hidden"
            src={BannerHeaderHome}
            alt="Banner com um colar com uma joia"
          />
        </div>
        <DrawerContent className="w-96">
          <DrawerHeader className="flex justify-end">
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center gap-4">
            <nav className="flex flex-row justify-between items-center w-full h-24 ">
              <Image
                onClick={handleButtonClick}
                src={LogoEterialiPictogramaPreto}
                alt="Logo da eteriali"
                className=" w-12 h-12"
              />
              <ul className="flex flex-col gap-4 items-center">
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
              <Image
                onClick={handleButtonClick}
                src={LogoEterialiPictogramaPreto}
                alt="Logo da eteriali"
                className=" w-12 h-12"
              />
            </nav>
            <Button onClick={openModal} children="Loja fisica" />
            <DrawerClose disabled className="flex gap-4"></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
