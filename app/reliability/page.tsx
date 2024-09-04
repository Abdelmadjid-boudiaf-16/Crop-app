import Hero from '@/components/hero';
import reliabilityImage from '/public/reliability.jpg'


export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImage}
      alt="Wilding"
      title="Super High Reliability Hosting"
    />
  );
}
