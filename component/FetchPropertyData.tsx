"use client";
import { Form } from "@/interface";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

export const FetchPropertyData = () => {
  const [data, setData] = useState<Form[] | null>();
  const router = useRouter();
  useEffect(() => {
    const localdata = localStorage.getItem("PropertyForm");
    const finalData = !!localdata ? JSON.parse(localdata) : [];
    if (finalData?.length) {
      setData(finalData);
    }
  }, []);

  const handleRemove = ({ property_name }: { property_name: string }) => {
    const updatedData = data?.length
      ? data.filter((item) => item?.propertyname !== property_name)
      : [];
    if (updatedData) {
      setData(updatedData);
      localStorage.setItem("PropertyForm", JSON.stringify(updatedData));
    }
  };

  const handleUpdate = ({ property_name }: { property_name: string }) => {
    router.push(`/update?propertyname=${property_name}`);
  };

  return !!data ? (
    <div className="py-20 px-20 ">
      <div className="text-center text-3xl font-bold text-orange-600 mb-8 ">
        FetchPropertyData
      </div>

      {data?.map((form, index) => {
        if (data) {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-50 to-white shadow-xl rounded-2xl p-6 mb-6 border
              w-70 border-orange-200 hover:shadow-2xl transition-transform hover:scale-105 "
            >
              <div className="text-2xl font-bold text-orange-600 mb-4 ">
                {form?.propertyname}
              </div>

              <div className="space-y-2 text-gray-700">
                <div>
                  <span className="font-semibold "> Address:</span>
                  <span className="truncate">{form?.address}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Configuration:</span>
                  <span>{form?.configuration}</span>
                </div>

                <div className="flex justify-between text-lg font-semibold text-green-600">
                  <span> Price:</span>
                  <span>₹ {form?.price}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold"> Size:</span>
                  <span>{form?.size} sqft</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold"> Launch Date:</span>
                  <span>{form?.launchdate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold"> Group Name:</span>
                  <span>{form?.groupname}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <button
                    onClick={() => {
                      handleUpdate({
                        property_name: form?.propertyname,
                      });
                    }}
                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      handleRemove({
                        property_name: form?.propertyname,
                      });
                    }}
                    className="px-6 py-1 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  ) : (
    "Not fill the data by user"
  );
};
