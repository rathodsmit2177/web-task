import { Property } from "@/interface";
import Image from "next/image";
import React from "react";

const getProperty = async (id: string) => {
  try {
    const resp = await fetch(
      `https://api.housivity.com/production/api/property/${id}`
    );
    const res = await resp.json();
    const result: Property = res?.data;

    console.log("getProperty resp pgggggg", result);
    return result;
  } catch (error) {
    console.log(" getProperty error", error);
  }
};

export default async function PropertyDetail({
  params,
}: {
  params: { id: string | number };
}) {
  const property = await getProperty(params?.id as string);

  const baseUrl = "https://housivity-production.s3.ap-south-1.amazonaws.com";

  const thumbnailUrl = property?.data?.media?.thumbnail?.replace(
    "https://transimg.housivity.com/transform",
    baseUrl
  );

  console.log("dataaaa", property);
  return (
    <div className="mx-30 py-20 flex items-center justify-center bg-gray-100 rounded-2xl ">
      <div>
        <Image
          src={thumbnailUrl}
          alt="not image"
          height={300}
          width={300}
          className="rounded-xl"
        />
      </div>
      <div className="px-10">
        <div className="text-2xl font-bold">{property?.name}</div>
        <div>{property?.data?.detailToDisplay?.companyName}</div>
        <div>price:-{property?.data?.detailToDisplay?.price}</div>
        <div>addres:-{property?.address?.address}</div>
      </div>
    </div>
  );
}
