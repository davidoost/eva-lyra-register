// function to check with EVA if an authorization token is (still) valid

export default async function validateToken(token: string) {
  const headers = {
    "EVA-User-Agent": "DavidTest/1.0",
    "EVA-Requested-OrganizationUnitID": process.env.EVA_REQUESTED_OU!,
    "Content-Type": "application/json",
    Authorization: ` eva ${token}`,
  };
  const res = await fetch(`${process.env.EVA_ENDPOINT}/message/validatetoken`, {
    method: "POST",
    headers: headers,
    cache: "no-cache",
  });
  if (res.status == 200) return true;
  else return false;
}
