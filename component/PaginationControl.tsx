"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const PaginationControl = () => {
  const route = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");
  const per_page = Number(searchParams.get("per_page") ?? "6");

  const totalData: number = 30;
  const dataPerPage: number = 6;

  const totalPages: number = Math.ceil(totalData / dataPerPage);

  let currentPage: number = page;
  let pageNumber: number[] = [];

  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;

    pageNumber.push(i);
  }

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }

  console.log(pageNumber);

  return (
    <div className="flex gap-5 text-center justify-center py-10">
      <button
        disabled={Number(page) <= 1}
        className="px-2 py-1 bg-orange-400 text-white rounded-xl"
        onClick={() => {
          route.push(`/?page=${Number(page) - 1} &per_page=${per_page}`);
        }}
      >
        Prev
      </button>

      <div>
        {pageNumber.map((i, index) => (
          <Link
            className="px-3 text-orange-500 "
            key={index}
            href={`/?page=${i}&per_page=${per_page}`}
          >
            {i}
          </Link>
        ))}
      </div>

      <button
        disabled={Number(page) >= 5}
        className={`px-2 py-1 bg-orange-400 text-white rounded-xl ${
          page === currentPage ? "font-bold text-red-500 bg-orange-400" : ""
        }`}
        onClick={() => {
          route.push(`/?page=${Number(page) + 1} &per_page=${per_page}`);
        }}
      >
        Next
      </button>
    </div>
  );
};
