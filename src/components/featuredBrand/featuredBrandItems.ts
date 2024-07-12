import logitech from "../../images/Logitech_logo.svg.png";
import corsair from "../../images/Corsair-logo.png";
import Razer from "../../images/Logo_Razer_2017.png";
import steelSeries from "../../images/steelseries.png";
import ducky from "../../images/ducky.png";
import filco from "../../images/2020-NEW-FILCO-Logo.png";

type TfeaturedBrandItems = {
  logo: string;
  title: string;
  bgColor: string;
};

export const featuredBrandItems: TfeaturedBrandItems[] = [
  {
    logo: logitech,
    title: "Logitech",
    bgColor: "#dddddd",
  },
  {
    logo: corsair,
    title: "Corsair",
    bgColor: "#dddddd",
  },
  {
    logo: Razer,
    title: "Razer",
    bgColor: "#dddddd",
  },
  {
    logo: steelSeries,
    title: "steelSeries",
    bgColor: "#dddddd",
  },
  {
    logo: ducky,
    title: "ducky",
    bgColor: "#dddddd",
  },
  {
    logo: filco,
    title: "filco",
    bgColor: "#dddddd",
  },
];
