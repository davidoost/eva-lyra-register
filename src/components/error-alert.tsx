"use client";

import { useSearchParams } from "next/navigation";
import { Alert, Text } from "@/utils/lyra";

export default function ErrorAlert() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  if (error)
    return (
      <Alert variant="error">
        <Text>{error}</Text>
      </Alert>
    );
}
