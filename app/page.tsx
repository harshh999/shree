import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { PlantCategories } from "@/components/home/PlantCategories";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PlantRental } from "@/components/home/PlantRental";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BusinessStats } from "@/components/home/BusinessStats";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <PlantCategories />
      <ServicesPreview />
      <PlantRental />
      <WhyChooseUs />
      <BusinessStats />
      <FinalCTA />
    </>
  );
}
