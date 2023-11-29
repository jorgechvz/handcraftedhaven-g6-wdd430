import CreateUserForm from '@/components/ui/auth/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function Page() {

  return (
    <CreateUserForm />
  );
}