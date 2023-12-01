import Sidebar from "@/components/ui/dashboard/sidebar/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { fetchUserByEmail } from "@/lib/data";
import { RoleType } from "@prisma/client";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const emailUser = session?.user?.email;
  const getRole = await fetchUserByEmail(emailUser as string);

  if (getRole.role != RoleType.ADMIN) {
    return <div className="mt-[100px]">You don't have authorization</div>;
  }

  return (
    <div className="flex mt-[75px] mx-2">
      <div className="flex-1 bg-kumera-600 rounded-lg">
        <Sidebar />
      </div>
      <div className="flex-[4] px-2">{children}</div>
    </div>
  );
}
