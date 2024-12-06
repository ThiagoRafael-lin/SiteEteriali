import Image from "next/image";
import Microscopio from "@/Assets/Img/Microscopio.png";
import MulherOlhandoNoMicroscopio from "@/Assets/Img/MulherOlhandoNoMicroscopio.png";

export const SustentabilidadePrimeiraImagem = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center w-full mb-16 mt-16">
        <p className="font-sulphur text-[24px] w-3/4 text-center">
          Nosso processo de criação de diamantes é meticulosamente projetado
          para minimizar o impacto ambiental. Utilizamos tecnologias avançadas
          que simulam as condições naturais de formação dos diamantes, sem a
          necessidade de extração de recursos naturais. Isso significa que
          nossos diamantes são criados em laboratório, em um ambiente
          controlado, sem gerar resíduos ou emissões nocivas.
        </p>
      </div>
      <div className="">
        <Image src={Microscopio} alt="Um microscopio" />
      </div>
    </div>
  );
};

export const SustentabilidadeSegundaImagem = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center w-full mb-16 mt-16">
        <p className="font-sulphur text-[24px] w-3/4 text-center">
          Ao escolher um de nossos diamantes, você está optando por uma joia que
          não agride o meio ambiente. Nossos diamantes são criados de forma
          ética e responsável, contribuindo para a preservação dos recursos
          naturais e para um futuro mais sustentável.
        </p>
      </div>
      <div className="">
        <Image
          src={MulherOlhandoNoMicroscopio}
          alt="Uma Mulher olhando em um microscopio"
        />
      </div>
    </div>
  );
};
