import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
