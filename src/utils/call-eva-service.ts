import { cookies } from "next/headers";

export default async function callEvaService(service: string, data: any) {
  const OU = process.env.EVA_REQUESTED_OU!;
  const ENDPOINT = process.env.EVA_ENDPOINT!;
  const authToken = cookies().get("EVA-Auth-Token");
  const headers: {
    [key: string]: string;
    "EVA-User-Agent": string;
    "EVA-Requested-OrganizationUnitID": string;
    "Content-Type": string;
  } = {
    "EVA-User-Agent": "DavidTest/1.0",
    "EVA-Requested-OrganizationUnitID": OU,
    "Content-Type": "application/json",
  };
  if (authToken) {
    if (service == "ValidateToken") {
      headers["Authorization"] = `eva ${authToken.value}`;
    } else headers["Authorization"] = `${authToken.value}`;
  }

  const res = await fetch(`${ENDPOINT}/message/${service}`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(data), // Ensure data is correctly stringified
    cache: "no-cache",
  });
  if (!res.ok) {
    console.error(`Error calling ${service}: ${res}`);
    return res.status;
  }
  return res.json();
}
