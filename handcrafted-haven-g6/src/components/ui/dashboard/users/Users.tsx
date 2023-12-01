import { fetchUsers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function User() {
  const users = await fetchUsers();

  return (
    <div className="bg-silverSand-950 p-5 rounded-lg mt-5 text-silverSand-50">
      <div className="flex items-center justify-between">
        {/* <Search placeholder="Search for a user..." /> */}
        <Link href="/dashboard/users/create">
          <button className="p-[10px] bg-Kilamanjaro-950 text-silverSand-50 border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Role</td>
          </tr>
        </thead>
        <tbody>
          {users?.map(
            ({
              id,
              name,
              email,
              imageProfile,
              role,
            }: {
              id: string;
              name: string;
              email: string;
              imageProfile: string | null;
              role: string;
            }) => (
              <tr key={id}>
                <td>
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src={imageProfile || "/user.svg"}
                      alt={`${name} profile image`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <p className="pl-3">{name}</p>
                  </div>
                </td>
                <td>{email}</td>
                <td>{role}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
