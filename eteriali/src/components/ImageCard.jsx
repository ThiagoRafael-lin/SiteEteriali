import Image from "next/image";
import Link from "next/link";

function ImageCard({ src, alt, id }) {
  return (
    <Link href={`/tela-produto/${id}`}>
      <Image
        src={src}
        alt={alt}
        className="cursor-pointer" // Adiciona o cursor de mão
      />
    </Link>
  );
}

export default ImageCard;
