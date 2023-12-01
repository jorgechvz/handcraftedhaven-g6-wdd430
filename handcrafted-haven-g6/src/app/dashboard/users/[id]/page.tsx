import UserId from "@/components/ui/dashboard/users/UserById";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Users</h1>
      <UserId userId={params.id} />
    </div>
  );
}
