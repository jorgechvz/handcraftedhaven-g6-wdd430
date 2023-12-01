import UserByRole from "@/components/ui/dashboard/users/UserByRole";
import User from "@/components/ui/dashboard/users/Users";
import { RoleType } from "@prisma/client";

export default function Users() {
  return (
    <div>
      <User />
    </div>
  );
}
