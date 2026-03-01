import HomeContent from "@/components/home/HomeContent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Quick hire - Home",
  description: "Welcome to the Job hunt platform",
};

export default function Home() {
  return <HomeContent />;
}
