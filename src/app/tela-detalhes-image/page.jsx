// "use client";

// import { useRouter } from "next/navigation";
// import primeiraImagem from "@/Assets/Img/FotoJoias/AnelPedraBranca.png";
// import segundaImagem from "@/Assets/Img/FotoJoias/AnelPedraAzulnovo.png";
// import terceiraImagem from "@/Assets/Img/FotoJoias/AnelPedraBranca2.png";
// import quartaImagem from "@/Assets/Img/FotoJoias/ColarPedraBranca.png";
// import quintaImagem from "@/Assets/Img/FotoJoias/BrincoPedraVerde.png";
// import sextaImagem from "@/Assets/Img/FotoJoias/BrincoPedraBranca.png";

// function DetalhesImagem() {
//   const router = useRouter();
//   const { id } = router.query;

//   // Lógica para buscar as informações da imagem com base no ID
//   // (Exemplo usando um objeto estático)
//   const images = {
//     1: { src: primeiraImagem, alt: "Imagem 1" },
//     2: { src: segundaImagem, alt: "Imagem 2" },
//     2: { src: terceiraImagem, alt: "Imagem 2" },
//     2: { src: quartaImagem, alt: "Imagem 2" },
//     2: { src: quintaImagem, alt: "Imagem 2" },
//     2: { src: sextaImagem, alt: "Imagem 2" },
//     // ...
//   };

//   const selectedImage = images[id];

//   return (
//     <div>
//       <h1>Detalhes da Imagem</h1>
//       <Image src={selectedImage.src} alt={selectedImage.alt} />
//     </div>
//   );
// }

// export default DetalhesImagem;
