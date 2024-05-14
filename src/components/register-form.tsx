import callEvaService from "@/utils/call-eva-service";
import RenderInput from "./inputs/render-input";
import { IUserRequirementsList } from "@/utils/interfaces";
import { Button } from "@/utils/lyra";
import registerCustomer from "@/utils/register-customer";
import ErrorAlert from "./error-alert";

export default async function RegisterForm() {
  const appConfig = await callEvaService("GetApplicationConfiguration", {});
  const userRequirements: IUserRequirementsList =
    appConfig.Configuration.UserRequirements;
  return (
    <form action={registerCustomer} className="flex flex-col gap-2">
      {Object.entries(userRequirements).map(([key, value]) => (
        <RenderInput name={key} userRequirement={value} />
      ))}
      <ErrorAlert />
      <Button type="submit">Submit</Button>
    </form>
  );
}
