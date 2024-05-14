"use client";

import { ICountryList } from "@/utils/interfaces";
import { SearchListField } from "@/utils/lyra";

export default function CountrySelectField({ countries }: ICountryList) {
  return (
    <SearchListField
      getLabel={(item) => item.Name}
      getItemId={(item) => item.ID}
      items={countries}
      label="Country"
      name="CountryID"
      selectRenderElements={(item) => ({ label: item.Name })}
    />
  );
}
