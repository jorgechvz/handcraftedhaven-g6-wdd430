import { ButtonTypes } from "@/lib/types";
import Image from "next/image";

export default function Button({
  type,
  title,
  icon,
  variant,
  full,
}: ButtonTypes) {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
}
