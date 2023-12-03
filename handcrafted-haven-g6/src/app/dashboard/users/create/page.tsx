import UserForm from '@/components/ui/dashboard/users/CreateUser';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create User Dashboard - Handcrafted Haven",
};

export default function Page() {

  return (
    <UserForm/>
  );
}