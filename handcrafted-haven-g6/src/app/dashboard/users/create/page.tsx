import UserForm from '@/components/ui/dashboard/users/CreateUser';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create User | Dashboard Admin',
};

export default function Page() {

  return (
    <UserForm/>
  );
}