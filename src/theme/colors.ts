import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ef3f37",
  primaryBright: "#f3746f",
  primaryDark: "#c1302a",
  secondary: "#740606",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#5a5a5a",
  textDisabled: "#BDC2C4",
  textSubtle: "#676767",
  borderColor: "#E9EAEB",
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(#ef3f37,rgb(243 116 111));",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#d99645",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#fcf2e2",
  textDisabled: "#666171",
  textSubtle: "#d4d1c4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg,#6d6d6d 0%,#343135 100%)",
  },
};
