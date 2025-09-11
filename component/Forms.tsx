"use client";

import React, { useEffect, useState } from "react";
import { Form } from "@/interface";
import { useRouter } from "next/navigation";

export const Forms = ({ propertyName }: { propertyName?: string }) => {
  const [data, setData] = useState<Form>();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as Form)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data) return;

    const localData = localStorage.getItem("PropertyForm");
    if (localData) {
      const currentData: Form[] = JSON.parse(localData);

      const filteredData = currentData?.filter(
        (p) => p?.propertyname !== propertyName
      );

      const newData = [...filteredData, data];
      localStorage.setItem("PropertyForm", JSON.stringify(newData));
      alert("Updated!!!!");
      router.push("/about");
      console.log("======filterdata", newData);
    }
  };

  const handleOnclick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localData = localStorage.getItem("PropertyForm");
    const finalData = !!localData ? JSON.parse(localData) : null;
    const updated = [...(finalData ? [...finalData] : []), data];
    localStorage.setItem("PropertyForm", JSON.stringify(updated));
    setData({
      propertyname: "",
      groupname: "",
      address: "",
      price: "",
      configuration: "",
      size: "",
      launchdate: "",
    });
    alert("Data saved to localStorage!");
  };

  useEffect(() => {
    const localdata = localStorage?.getItem("PropertyForm");
    if (localdata) {
      const data: Form[] = JSON.parse(localdata);

      const finalData = data?.find((p) => p?.propertyname === propertyName);

      if (finalData) {
        setData(finalData);
      }
    }
  }, [propertyName]);

  return (
    <form
      onSubmit={propertyName ? handleSubmit : handleOnclick}
      className="max-w-2xl mx-auto p-8"
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-orange-200 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Property Name
          </label>
          <input
            type="text"
            name="propertyname"
            onChange={handleChange}
            value={data?.propertyname ?? ""}
            placeholder="Vision Ventus"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Group Name
          </label>
          <input
            type="text"
            name="groupname"
            value={data?.groupname ?? ""}
            onChange={handleChange}
            placeholder="Vision Group"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={data?.address ?? ""}
            onChange={handleChange}
            placeholder="Randesan, Gandhinagar"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={data?.price ?? ""}
            onChange={handleChange}
            placeholder="₹1.43 Cr - ₹1.45 Cr"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Configuration
          </label>
          <input
            type="text"
            name="configuration"
            value={data?.configuration ?? ""}
            onChange={handleChange}
            placeholder="4 BHK Flat"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Size</label>
          <input
            type="text"
            name="size"
            value={data?.size ?? ""}
            onChange={handleChange}
            placeholder="1676 SqFt - 1699 SqFt"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Launch Date
          </label>
          <input
            type="date"
            name="launchdate"
            value={data?.launchdate ?? ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div className="flex justify-center gap-10 pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 hover:scale-105 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};
