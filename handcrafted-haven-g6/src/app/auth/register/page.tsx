import CreateUserForm from '@/components/ui/auth/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Handcrafted Haven',
};

export default function Page() {

  return (
    <CreateUserForm />
  );
}