"use client";
import { useState } from "react";
import { converterMap } from "@/utils/converterLogic";
import { ConverterType } from "@/utils/converterTypes";

export const ConverterTemplate = ({
  type,
}: {
  type: ConverterType;
}) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const config = converterMap[type];

  const handleConvert = () => {
    const value = Number(input);
    if (isNaN(value)) return;
    setResult(config.convert(value));
  };

  return (
    <div className="border p-6 rounded-lg w-96 pt-40">
      <h1 className="text-xl font-bold mb-4">{config.label}</h1>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Enter ${config.from}`}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={handleConvert}
        className="bg-blue-600 text-white p-2 w-full rounded"
      >
        Convert to {config.to}
      </button>

      {result !== null && (
        <p className="mt-4 font-semibold">
          Result: {result} {config.to}
        </p>
      )}
    </div>
  );
};
