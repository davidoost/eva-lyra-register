import { Card, Text } from "@/utils/lyra";
import RegisterForm from "@/components/register-form";

export default async function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Text variant="display" className="w-full max-w-xl">
        Register
      </Text>
      <Card variant="primary" className="w-full max-w-xl p-4">
        <RegisterForm />
      </Card>
    </div>
  );
}
