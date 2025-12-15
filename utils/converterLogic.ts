import { ConverterType } from "./converterTypes";

export const converterMap: Record<
  ConverterType,
  {
    label: string;
    from: string;
    to: string;
    convert: (value: number) => number;
  }
> = {
  [ConverterType.MM_TO_INCH]: {
    label: "MM to Inches",
    from: "MM",
    to: "Inches",
    convert: (v) => Number((v / 25.4).toFixed(5)),
  },

  [ConverterType.INCH_TO_MM]: {
    label: "Inches to MM",
    from: "Inches",
    to: "MM",
    convert: (v) => Number((v * 25.4).toFixed(5)),
  },

  [ConverterType.CM_TO_FEET]: {
    label: "CM to Feet",
    from: "CM",
    to: "Feet",
    convert: (v) => Number((v / 30.48).toFixed(5)),
  },

  [ConverterType.FEET_TO_CM]: {
    label: "Feet to CM",
    from: "Feet",
    to: "CM",
    convert: (v) => Number((v * 30.48).toFixed(5)),
  },
};
