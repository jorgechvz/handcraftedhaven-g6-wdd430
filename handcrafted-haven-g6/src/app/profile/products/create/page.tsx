import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateProduct from "@/components/ui/profile/CreateProduct";
import { fetchCategories, fetchUserByEmail } from "@/lib/data";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Create Product - Handcrafted Haven",
};

export default async function ProfileCreateProduct() {
  const session = await getServerSession(authOptions);
  const getUserEmail = session?.user?.email;
  const userId = await fetchUserByEmail(getUserEmail as string);
  const { id } = userId;
  const getCategories = await fetchCategories();
  return (
    <div className="flex flex-col min-h-screen py-2">
      <div className="flex flex-col flex-[4]">
        <CreateProduct userId={id as string} category={getCategories}/>
      </div>
    </div>
  );
}
