"use client";

import { Count } from "@/interface";
import React from "react";
import { create } from "zustand";

type store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

const useCounterStore = create<store>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

const Zustand = () => {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div className="flex items-center justify-center min-h-screen bg-whte from-orange-50 to-orange-100">
      <div className="bg-gray-100 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-[380px] text-center border border-orange-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Count: <span className="text-orange-500">{count}</span>
        </h1>

        <div className="flex justify-center gap-6">
          <button
            onClick={increase}
            className="px-6 py-3 rounded-xl bg-orange-500/80 backdrop-blur-md text-white font-semibold shadow-lg hover:bg-orange-600/90 hover:scale-105 transition"
          >
            Increase
          </button>
          <button
            onClick={decrease}
            className="px-6 py-3 rounded-xl bg-orange-500/80 backdrop-blur-md text-white font-semibold shadow-lg hover:bg-orange-600/90 hover:scale-105 transition"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Zustand;
