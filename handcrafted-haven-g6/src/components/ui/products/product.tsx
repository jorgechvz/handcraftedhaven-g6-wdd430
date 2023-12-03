import Image from "next/image";
import Link from "next/link";

interface ProductoProps {
  id: string;
  name: string;
  price: number;
  image: string | null | undefined;
  description: string | null | undefined;
}

const Product: React.FC<ProductoProps> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  return (
    <div>
      <Image
        src={image || "/placeholder-image.png"}
        alt={name}
        width={300}
        height={100}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="mb-5">Price: ${price}</p>
      {/* ************ */}
      <Link
        className="rounded px-5 py-2 bg-Kilamanjaro-950 text-silverSand-50 hover:bg-silverSand-950"
        href={`/products/${id}`}
      >
        View details
      </Link>
    </div>
  );
};

export default Product;
