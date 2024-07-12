import { ReactNode } from "react";
import { car, dollers, payment, support } from "../../icons/icons";

type TserviceItems = {
  logo: ReactNode;
  title: string;
  bgColor: string;
};

export const serviceItems: TserviceItems[] = [
  {
    logo: car,
    title: "Free Shipping",
    bgColor: "#fcfcb5",
  },
  {
    logo: payment,
    title: "Quick Payment",
    bgColor: "#d8d8fa",
  },
  {
    logo: dollers,
    title: "first checkout",
    bgColor: "#f5d0d0",
  },
  {
    logo: support,
    title: "24/7 support",
    bgColor: "#ceface",
  },
];
