import { callouts } from "@/lib/constants";
import { fetchProductsCover } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Collections() {
  const getProduct = await fetchProductsCover();
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-Kilamanjaro-950 font-poppins">The best of Handcrafted Haven</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {getProduct.map((callout) => ( 
              <div key={callout.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-silverSand-50 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={callout.image || "placeholder-image.png"}
                    alt={`${callout.name}'s image`}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-Kilamanjaro-950">
                  <Link href={`/products/${callout.id}`}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-sm text-silverSand-950">
                  {callout.description}
                </p>
                <button className="mt-2 mb-3 py-2 w-full rounded-md font-poppins bg-Kilamanjaro-900 text-silverSand-50 hover:bg-kumera-700 hover:text-silverSand-50">
                    <Link href={`/products/${callout.id}`}>
                        <span className="absolute inset-0" />
                        Shop now
                    </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
