"use server";

// function to register customers and optionally return errors as search params

import { redirect } from "next/navigation";
import callEvaService from "./call-eva-service";
import { z } from "zod";
import { parseZodFormErrors } from "./zod-error";
import { cookies } from "next/headers";

const schema = z.object({
  EmailAddress: z.string().email(),
  FirstName: z.string(),
  LastName: z.string(),
  PreferredStoreID: z.string().optional(),
});

export default async function registerCustomer(formData: FormData) {
  const form = Object.fromEntries(formData);

  console.log("test1");

  const { data, error, success } = schema.safeParse(form);
  const orderAppToken = formData.get("OrderAppToken") as string;
  const orderId = formData.get("OrderID") as string;

  console.log("test2");

  if (!success) {
    const zodError = parseZodFormErrors(error);
    console.log(zodError);
    return zodError;
  }

  console.log("test3");

  const res = await callEvaService(
    "CreateCustomer",
    {
      User: { ...data },
      AutoLogin: true,
      OrderID: orderId,
      AttachToOrder: true,
    },
    orderAppToken ? orderAppToken : null
  );

  console.log("test4");

  switch (res.Result) {
    case 1:
      redirect("/?error=Provided+email+is+invalid");
      break;
    case 3:
      redirect("/?error=Provided+email+is+already+in+use");
      break;
    case 4:
      redirect("/?error=Provided+nickname+is+already+in+use");
      break;
    case 5:
      redirect("/?error=Provided+phone+number+is+already+in+use");
      break;
    case 6:
      redirect("/?error=Autologin+failed");
      break;
    case 7:
      redirect("/?error=Provided+fiscal+identifier+is+already+in+use");
      break;
    default:
      const authToken = res.User.AuthenticationToken;
      if (!authToken) {
        throw new Error("No authorization token returned from EVA");
      }
      cookies().set("EVA-Auth-Token", res.User.AuthenticationToken);
      redirect("/success");
  }
}
