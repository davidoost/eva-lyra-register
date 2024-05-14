"use client";

import Barcode from "react-barcode";

interface BarcodeProps {
  value: string;
}

export default function CustomerBarcode({ value }: BarcodeProps) {
  return <Barcode value={value} />;
}
