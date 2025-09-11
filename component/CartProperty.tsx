"use client";

import { Property } from "@/interface";

import Image from "next/image";
import { useEffect, useState } from "react";

const CartProperty = () => {
  const [data, setData] = useState<Property[] | null>();

  const baseUrl = "https://housivity-production.s3.ap-south-1.amazonaws.com";

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    const parsedData = !!stored ? JSON.parse(stored) : [];
    if (parsedData?.length) {
      setData(parsedData);
    }
  }, []);

  // Remove item function
  const handleRemove = ({ property_id }: { property_id: string }) => {
    const updatedItems = data?.length
      ? data.filter((item) => item?._id !== property_id)
      : [];
    if (updatedItems) {
      setData(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    }
  };
  return !!data ? (
    <div>
      {data?.map((property, index) => {
        const thumbnailUrl = property?.data?.media?.thumbnail?.replace(
          "https://transimg.housivity.com/transform",
          baseUrl
        );
        if (data) {
          return (
            <div
              key={index}
              className="p-4 gap-2 mx-5 rounded-lg bg-gray-100 shadow flex flex-col grid-cols-3 justify-between "
            >
              {thumbnailUrl ? (
                <Image
                  src={thumbnailUrl}
                  alt={property?.name || "Property thumbnail"}
                  width={300}
                  height={400}
                  className="h-40 w-full object-cover rounded-lg"
                />
              ) : (
                <div className="h-40 w-full flex items-center justify-center bg-gray-200 rounded-lg">
                  No Image
                </div>
              )}
              <div>{property?.name}</div>
              <div className="text-xs ">
                Add:- {property?.data?.detailToDisplay?.address}
              </div>
              <div className="flex justify-between">
                <div>{property?.data?.detailToDisplay?.price} OnWards </div>
                <button
                  onClick={() => {
                    handleRemove({ property_id: property?._id });
                  }}
                  className="px-2 rounded-lg bg-orange-300 cursor-pointer hover:bg-orange-200"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        } else {
          <div className="py-20">Please Select a card</div>;
        }
      })}
    </div>
  ) : (
    "Please select property"
  );
};

export default CartProperty;
