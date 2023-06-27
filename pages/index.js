import Hero from "../components/Home/Hero";
import FeaturedCategories from "../components/Home/FeaturedCategories";
import RandomMeal from "../components/Home/RandomMeal";
import FeaturedAreas from "../components/Home/FeaturedAreas";
import { VStack } from "@chakra-ui/react";
import FeaturedFood from "../components/Home/FeaturedFood";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomnom</title>
      </Head>
      <VStack alignItems='initial' gap='120px'>
        <Hero />
        <FeaturedCategories />
        <FeaturedAreas />
        <FeaturedFood />
        <RandomMeal />
      </VStack>
    </>
  );
}
