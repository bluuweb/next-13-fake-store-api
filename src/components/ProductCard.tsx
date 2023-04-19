import { Product } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="shadow-md p-4">
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <Image
        src={product.image}
        alt={product.title}
        width={"100"}
        height={200}
        className="w-full max-h-48"
      />
      <Link href={`/shop/${product.id}`}>Más información</Link>
    </div>
  );
};
export default ProductCard;
