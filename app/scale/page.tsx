import Hero from "@/components/hero";
import scaleImage from "/public/scale.jpg";
export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImage}
      alt="Sleet factory"
      title="Scale Your App To Infinity."
    />
  );
}
