import { Metadata } from "next";
import Home from "@/components/features/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function HomePage() {
  return <Home />;
}
