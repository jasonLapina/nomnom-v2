import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";

import { useQuery } from "react-query";

import Link from "next/link";

import axiosInstance from "../../shared/axiosInstance";
import MyBtn from "../../shared/UI/MyBtn";

const fetchMealFn = async () => {
  const { data } = await axiosInstance.get(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  return data.meals[0];
};

const dummyMeal = {
  idMeal: "0",
  strMeal: "Medyo masarap",
  strMealThumb:
    "https://www.seriouseats.com/thmb/uc8nb040OwgXekR9obuhEqm8WoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__10__20191023-chicken-adobo-vicky-wasik-19-12ce105a2e1a44dfb1e2673775118064.jpg",
  strCategory: "Chicken",
  strArea: "Filipino",
};

function RandomMeal() {
  // const { data: meal, isLoading, isError } = useQuery("meal", fetchMealFn);

  // if (isLoading || isError)
  //   return (
  //     <Center>
  //       <MyHeading>Loading meal data...</MyHeading>
  //     </Center>
  //   );

  return (
    <Box mt='40px'>
      <MyHeading>Can&apos;t Decide?</MyHeading>

      <Text fontSize='22px' textAlign='center'>
        Try this one! or generate another random meal.
      </Text>

      <VStack mt='24px'>
        <Box pos='relative' as={Link} href={dummyMeal.idMeal}>
          <Text
            fontSize='48px'
            fontWeight='bold'
            pos='absolute'
            textShadow='2px 2px white'
            left='-48px'
          >
            {dummyMeal.strMeal}
          </Text>
          <Image
            maxW='600px'
            src={dummyMeal.strMealThumb}
            alt={dummyMeal.strMeal}
            borderRadius='10px'
            boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
          />
          <VStack gap='16px' bgColor='red' fontSize='24px'>
            <Text
              px='16px'
              py='8px'
              borderRadius='10px'
              bgColor='bisque'
              pos='absolute'
              bottom='160px'
              left='-24px'
            >
              <strong>Category</strong>: {dummyMeal.strCategory}
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
              <strong>Area</strong>: {dummyMeal.strArea}
            </Text>
          </VStack>
        </Box>
        <MyBtn bgColor='salmon' mt='16px'>
          Randomize
        </MyBtn>
      </VStack>
    </Box>
  );
}

export default RandomMeal;
