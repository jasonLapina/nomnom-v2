import { Box, Image, Text, VStack } from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";

import Link from "next/link";

import axiosInstance from "../../shared/axiosInstance";
import MyBtn from "../../shared/UI/MyBtn";
import { useState } from "react";

const dummyMeal = {
  id: "54",
  title: "Chicken Adobo",
  image:
    "https://www.seriouseats.com/thmb/uc8nb040OwgXekR9obuhEqm8WoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__10__20191023-chicken-adobo-vicky-wasik-19-12ce105a2e1a44dfb1e2673775118064.jpg",
  category: "Chicken",
  area: "Filipino",
  price: 54,
};

function RandomMeal() {
  const [meal, setMeal] = useState(dummyMeal);

  const randomizeHandler = async () => {
    const { data } = await axiosInstance.get("random.php");
    const randomMeal = {
      id: data.meals[0].idMeal,
      title: data.meals[0].strMeal,
      image: data.meals[0].strMealThumb,
      category: data.meals[0].strCategory,
      area: data.meals[0].strArea,
      price: Number(data.meals[0].idMeal.slice(0, 2)),
    };
    setMeal(randomMeal);
  };

  return (
    <Box mt='40px'>
      <MyHeading>Can&apos;t Decide?</MyHeading>

      <Text fontSize='22px' textAlign='center'>
        Try this one! or generate another random meal.
      </Text>

      <VStack mt='24px'>
        <Box pos='relative' as={Link} href={meal.id}>
          <Text
            fontSize='48px'
            fontWeight='bold'
            textShadow='2px 2px white'
            mb='16px'
          >
            {meal.title}
          </Text>
          <Box
            fontSize='32px'
            bgColor='bisque'
            w='fit-content'
            transform='translateX(40px)'
            px='16px'
            py='8px'
            borderRadius='20px'
            pos='absolute'
            right='24px'
            top='80px'
          >
            ${meal.price}
          </Box>

          <Image
            mx='auto'
            maxW='600px'
            src={meal.image}
            alt={meal.title}
            borderRadius='10px'
            boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
            w='600px'
            h='450px'
          />
          <VStack gap='16px' fontSize='24px'>
            <Text
              px='16px'
              py='8px'
              borderRadius='10px'
              bgColor='bisque'
              pos='absolute'
              bottom='160px'
              left='-24px'
            >
              <strong>Category</strong>: {meal.category}
            </Text>
            <Text
              pos='absolute'
              left='-24px'
              bottom='80px'
              px='16px'
              py='8px'
              borderRadius='10px'
              bgColor='bisque'
            >
              <strong>Area</strong>: {meal.area}
            </Text>
          </VStack>
        </Box>
        <MyBtn onClick={randomizeHandler} bgColor='salmon' mt='16px'>
          Randomize
        </MyBtn>
      </VStack>
    </Box>
  );
}

export default RandomMeal;
