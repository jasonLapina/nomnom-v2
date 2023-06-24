import Hero from "../components/Home/Hero";
import FeaturedCategories from "../components/Home/FeaturedCategories";
import RandomMeal from "../components/Home/RandomMeal";
import FeaturedAreas from "../components/Home/FeaturedAreas";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack alignItems='initial' gap='80px'>
      <Hero />
      <FeaturedCategories />
      <FeaturedAreas />
      <RandomMeal />
    </VStack>
  );
}
