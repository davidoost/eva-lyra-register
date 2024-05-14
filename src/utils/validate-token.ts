import callEvaService from "./call-eva-service";

export default async function validateToken() {
  let isValid;
  const res = await callEvaService("ValidateToken", {});
  return res;
}
