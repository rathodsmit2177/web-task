import { Products } from "@/interface";
import Image from "next/image";
import React from "react";

export interface ProductProps {
  products: Products[];
}

export const FackData = ({ data }: { data: Products }) => {
  return (
    <div className="flex gap-6 p-5 bg-gray-100 rounded-xl shadow transition">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={data?.images[0]}
          alt={data?.title || "No image"}
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 justify-between items-start">
        {/* Left side info */}
        <div className="space-y-2">
          <div className="font-bold text-xl text-gray-800">{data?.title}</div>
          <div className="text-sm text-gray-500">{data?.brand}</div>
          <div className="text-gray-600 text-sm line-clamp-2">
            {data?.description}
          </div>
          <div className="font-semibold text-lg text-green-600">
            ${data?.price}
          </div>
        </div>

        {/* Right side button */}
        <div>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
