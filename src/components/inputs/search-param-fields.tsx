"use client";

import { TextField } from "@/utils/lyra";
import { useSearchParams } from "next/navigation";

export default function SearchParamFields() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const orderAppToken = searchParams.get("orderAppToken");
  const storeId = searchParams.get("storeId");
  return (
    <>
      {orderId && (
        <TextField
          key="OrderID"
          name="OrderID"
          value={orderId}
          className="hidden"
        />
      )}
      {orderAppToken && (
        <TextField
          key="orderAppToken"
          name="OrderAppToken"
          value={orderAppToken}
          className="hidden"
        />
      )}
      {storeId && (
        <TextField
          key="PreferredStoreID"
          name="PreferredStoreID"
          value={storeId}
          className="hidden"
        />
      )}
    </>
  );
}
