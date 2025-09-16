"use client";
import { FackData } from "@/component/FackData";
import { Products } from "@/interface";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function DummyData() {
  const [data, setData] = useState<Products[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchData = async (pageNumber: number) => {
    setIsLoading(true);
    try {
      const limit = 3;
      const skip: number = (pageNumber - 1) * limit;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const result = await response.json();
      setData((prevData) => [...prevData, ...result?.products]);
      if (data.length >= result.total) {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Faild to fetch Data:", error);
    } finally {
      setIsLoading(false);
    }
    console.log("data=========", data);
  };

  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isLoading, hasMore]);

  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchData(page);
    }
  }, [page]);

  return (
    <div className="py-20 px-15 bg-white min-h-screen">
      <h1 className="font-extrabold text-center text-4xl text-gray-800 mb-10 ">
        DummyData
      </h1>

      <ul className="grid gap-15">
        {data?.map((product, index) => (
          <li
            key={index}
            className=" rounded-2xl hover:scale-105   p-6  items-center "
          >
            <FackData data={product} />
          </li>
        ))}
      </ul>
      <div ref={ref} className="h-1"></div>
      {isLoading && <div>Loading The Data..</div>}
      {!hasMore && !isLoading && <div>end of the data</div>}
    </div>
  );
}
