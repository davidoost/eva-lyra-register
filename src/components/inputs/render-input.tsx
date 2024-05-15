import { ICountry, IUserRequirement } from "@/utils/interfaces";
import { TextField, CheckboxGroup, Checkbox, Text } from "@/utils/lyra";
import CountrySelectField from "./country-select";
import callEvaService from "@/utils/call-eva-service";

interface RenderFieldProps {
  name: string;
  userRequirement: IUserRequirement;
}

export default async function RenderInput({
  name,
  userRequirement,
}: RenderFieldProps) {
  if (!userRequirement.Display) return null;
  const isRequired =
    userRequirement.Required && userRequirement.RequiredFor % 2 !== 0;

  switch (name) {
    case "EmailAddress":
      return (
        <TextField
          key={name}
          // type="email"
          name="EmailAddress"
          label="Email"
          isRequired={isRequired}
        />
      );
    case "FirstName":
      return (
        <TextField
          key={name}
          name="FirstName"
          label="First Name"
          isRequired={isRequired}
        />
      );
    case "LastName":
      return (
        <TextField
          key={name}
          name="LastName"
          label="Last Name"
          isRequired={isRequired}
        />
      );
    case "Gender":
      return (
        <CheckboxGroup
          key={name}
          name="Gender"
          label="Gender"
          isRequired={isRequired}
          orientation="horizontal"
        >
          <Checkbox key="m" value="M">
            Male
          </Checkbox>
          <Checkbox key="f" value="F">
            Female
          </Checkbox>
          <Checkbox key="o" value="O">
            Other
          </Checkbox>
        </CheckboxGroup>
      );
    case "PhoneNumber":
      return (
        <TextField
          type="tel"
          key={name}
          name="PhoneNumber"
          label="Phone Number"
          isRequired={isRequired}
        />
      );

    case "CountryID":
      const countries = await callEvaService(
        "ListCountries",
        {
          FetchAll: true,
        },
        null
      );
      const countryList: ICountry[] = countries.Result;
      return <CountrySelectField key={name} countries={countryList} />;
    default:
      return (
        <Text key={name} color="error">
          Field {name} is listed but no field has been set up yet.
        </Text>
      );
  }
}
