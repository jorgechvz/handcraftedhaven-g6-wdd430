import LoginForm from "@/components/ui/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Handcrafted Haven",
};

export default function LoginPage() {
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <LoginForm />
    </div>
  );
}
