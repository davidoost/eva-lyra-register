import callEvaService from "@/utils/call-eva-service";
import { Text, Card, IconBadge } from "@/utils/lyra";
import Barcode from "react-barcode";
import CustomerBarcode from "@/components/barcode";

export default async function Success() {
  const currentUser = await callEvaService("getCurrentUser", {});
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Text variant="display">Success</Text>
      <Card
        variant="primary"
        className="flex flex-col items-center w-full max-w-xl p-4 gap-4"
      >
        <IconBadge name="verified-checkmark" size="xl" variant="green" />
        <Text variant="heading-1">Hi {currentUser.User.FirstName},</Text>
        <Text variant="body-large" className="text-center">
          You have successfully registered as a customer. We look forward to
          welcoming you in one of our stores or on our webshop!
        </Text>
        <CustomerBarcode value={currentUser.User.Barcode} />
      </Card>
    </div>
  );
}
