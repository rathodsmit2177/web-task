import { Products } from "@/interface";
import React from "react";

export interface ProductProps {
  products: Products[];
}

export const FackData = ({ data }: { data: Products }) => {
  return <>{data?.brand}</>;
};
