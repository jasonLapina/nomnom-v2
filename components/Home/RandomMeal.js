import {
  Box,
  HStack,
  Icon,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";

import axiosInstance from "../../shared/axiosInstance";
import MyBtn from "../../shared/UI/MyBtn";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { useRouter } from "next/router";

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
  const [isLoading, setIsLoading] = useState(false);

  const randomizeHandler = async () => {
    setIsLoading(true);
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

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(meal));
  };

  const router = useRouter();

  const buyNowHandler = () => {
    dispatch(addToCart(meal));
    router.push("/checkout");
  };

  return (
    <Box>
      <MyHeading>Can&apos;t Decide?</MyHeading>

      <Text fontSize='22px' textAlign='center'>
        Try this one! or generate another random meal.
      </Text>

      <VStack mt='24px'>
        <Box pos='relative'>
          <Text
            fontSize={{ base: "32px", sm: "48px" }}
            fontWeight='bold'
            textShadow='2px 2px white'
            mb='16px'
            bgColor='salmon'
            borderRadius='10px'
            px='16px'
            py='8px'
            maxW='600px'
            maxH='88px'
            overflowY='auto'
          >
            {isLoading ? "Loading..." : meal.title.trim()}
          </Text>
          <Box
            fontSize='32px'
            bgColor='bisque'
            w='fit-content'
            transform='translateX(40px) rotate(-20deg) '
            px='32px'
            borderRadius='20px'
            pos='absolute'
            left='-80px'
            bottom='400px'
            opacity={isLoading ? 0 : 1}
            transition='all .2s'
            zIndex={80}
          >
            ${meal.price}
          </Box>

          <Spinner
            pos='absolute'
            left='80px'
            borderWidth='10px'
            speed='1s'
            boxSize='md'
            opacity={isLoading ? 1 : 0}
            transition='opacity .2s'
          />
          <Image
            loading='lazy'
            mx='auto'
            opacity={!isLoading ? 1 : 0}
            transition='opacity .2s'
            src={meal.image}
            alt={meal.title}
            borderRadius='10px'
            boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
            w='600px'
            h='450px'
          />
          <VStack
            gap='16px'
            transition='all .2s'
            opacity={isLoading ? 0 : 1}
            fontSize='24px'
          >
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

          <HStack
            opacity={isLoading ? 0 : 1}
            transition='all .2s'
            pos='absolute'
            right='8px'
            bottom='8px'
          >
            <MyBtn onClick={addToCartHandler} bgColor='salmon'>
              Add to cart
            </MyBtn>
            <MyBtn
              onClick={buyNowHandler}
              color='salmon'
              borderColor='salmon'
              variant='outline'
            >
              Buy now
            </MyBtn>
          </HStack>
        </Box>
        <MyBtn
          onClick={randomizeHandler}
          variant='outline'
          borderColor='salmon'
          mt='16px'
        >
          Randomize
        </MyBtn>
      </VStack>
    </Box>
  );
}

export default RandomMeal;
