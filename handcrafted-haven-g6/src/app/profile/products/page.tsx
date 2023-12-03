import { CreateProductButton } from "@/components/ui/dashboard/buttons/Buttons";
import Pagination from "@/components/ui/dashboard/pagination/Pagination";
import Search from "@/components/ui/dashboard/search/Search";
import { ProductsByUserTable } from "@/components/ui/profile/ProductsByUserTable";
import { fetchProductsPages } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Products - Handcrafted Haven",
};


export default async function ProfileProducts({
  searchParams,
}: {
  searchParams?: { query?: string; page?: number };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);
  const totalPages = await fetchProductsPages(query);
  return (
    <div className="flex flex-col flex-1 mx-7 my-10 gap-y-5">
      <h2 className="text-3xl font-bold text-Kilamanjaro-950">My Products</h2>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Products ... " />
        <CreateProductButton />
      </div>
      <div>
        <ProductsByUserTable query={query} currentPage={currentPage}/>
      </div>
    </div>
  );
}
