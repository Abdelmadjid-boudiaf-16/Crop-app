import Image from "next/image";
import homePage from '/public/home.jpg'
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div>
      <Hero imgData={homePage} alt='car factory' title="Professional Cloud Hosting" />
      </div>
  );
}
