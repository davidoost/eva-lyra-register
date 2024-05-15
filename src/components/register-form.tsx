import callEvaService from "@/utils/call-eva-service";
import RenderInput from "./inputs/render-input";
import { IUserRequirementsList } from "@/utils/interfaces";
import { Button, TextField } from "@/utils/lyra";
import registerCustomer from "@/utils/register-customer";
import ErrorAlert from "./error-alert";
import SearchParamFields from "./inputs/search-param-fields";

export default async function RegisterForm() {
  const appConfig = await callEvaService(
    "GetApplicationConfiguration",
    {},
    null
  );
  const userRequirements: IUserRequirementsList =
    appConfig.Configuration.UserRequirements;
  return (
    <form action={registerCustomer} className="flex flex-col gap-2">
      {Object.entries(userRequirements).map(([key, value]) => (
        <RenderInput key="renderInputs" name={key} userRequirement={value} />
      ))}
      <SearchParamFields />
      <ErrorAlert />
      <Button key="submitButton" type="submit">
        Submit
      </Button>
    </form>
  );
}
