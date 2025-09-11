"use client";
// import useItemStore from "@/app/store/store";
import { Property } from "@/interface";
import Image from "next/image";
import React from "react";

export const PropertyCard = ({ data }: { data: Property }) => {
  const baseUrl = "https://housivity-production.s3.ap-south-1.amazonaws.com";

  const thumbnailUrl = data?.data?.media?.thumbnail?.replace(
    "https://transimg.housivity.com/transform",
    baseUrl
  );

  const handleOnclick = () => {
    const localData = localStorage.getItem("cart");

    const finalData = !!localData ? JSON.parse(localData) : [];

    const updated =
      finalData?._id == data?._id
        ? prompt("This property is the alrady liked")
        : [...(finalData ? [...finalData] : []), data];
    localStorage.setItem("cart", JSON.stringify(updated));
    alert("updated");
  };

  return (
    <div className="p-4  mx-5 rounded-lg bg-gray-100 shadow ">
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt={data?.name || "Property thumbnail"}
          width={300}
          height={400}
          className="h-40 w-full object-cover rounded-lg"
        />
      ) : (
        <div className="h-40 w-full flex items-center justify-center bg-gray-200 rounded-lg">
          No Image
        </div>
      )}
      <div>{data?.name}</div>
      <div className="text-xs ">
        Add:- {data?.data?.detailToDisplay?.address}
      </div>
      <div className="flex justify-between">
        <div>{data?.data?.detailToDisplay?.price} OnWards </div>

        <button
          onClick={handleOnclick}
          className="px-2 rounded-lg bg-orange-300 cursor-pointer hover:bg-orange-200"
        >
          Liked
        </button>
      </div>
    </div>
  );
};
