export interface IUserRequirement {
  Display: boolean;
  RequiredFor: number;
  UserType: 0 | 1 | 2;
  Preferred: boolean;
  Required: boolean;
}

export interface IUserRequirementsList {
  [key: string]: IUserRequirement;
}

export interface IFieldProps {
  Required: boolean;
}

export interface ICountry {
  ID: string;
  Name: string;
}

export interface ICountryList {
  countries: ICountry[];
}
