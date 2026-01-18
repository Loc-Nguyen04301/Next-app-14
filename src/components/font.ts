import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

const myFont = localFont({
  src: "./GoogleSans-SemiBoldItalic.ttf",
  variable: "--font-myFont",
});

export { manrope, roboto, myFont };
