import { Box, Grid, Image, Text } from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";
import { useState } from "react";
import { transform } from "framer-motion";

const featuredFood = [
  {
    title: "Baked salmon with fennel & tomatoes",
    image: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    id: "52959",
    price: 52,
  },
  {
    title: "Cajun spiced fish tacos",
    image: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    id: "52819",
    price: 52,
  },
  {
    title: "Beef and Mustard Pie",
    image: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    id: "52874",
    price: 52,
  },
  {
    title: "Beef and Oyster pie",
    image: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    id: "52878",
    price: 52,
  },
  {
    title: "Chicken Karaage",
    image: "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
    id: "52831",
    price: 52,
  },
  {
    title: "Honey Teriyaki Salmon",
    image: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
    id: "52773",
    price: 52,
  },
  {
    title: "Banana Pancakes",
    image: "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    id: "52855",
    price: 52,
  },
  {
    title: "BBQ Pork Sloppy Joes",
    image: "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
    id: "52995",
    price: 52,
  },
];

function FeaturedFood() {
  return (
    <Box>
      <MyHeading>Featured Food</MyHeading>
      <Grid
        justifyItems='center'
        columnGap='16px'
        rowGap='32px'
        gridTemplateColumns='repeat(4,1fr)'
      >
        {featuredFood.map((item) => (
          <Box
            role='group'
            transition='all .4s'
            cursor='pointer'
            pos='relative'
            key={item.id}
            _hover={{
              transform: "translateY(-8px)",
            }}
          >
            <Image
              borderRadius='10px'
              alt={item.title}
              src={item.image}
              w='320px'
              h='240px'
              boxShadow='8px 8px bisque'
              _hover={{
                filter: "brightness(.6)",
              }}
            />
            <Text
              transition='all .4s'
              fontSize='18px'
              color='white'
              _groupHover={{
                visibility: "visible",
                transform: "translateY(-40px)",
              }}
              pos='absolute'
              visibility='hidden'
              ml='4px'
              textShadow='1px 1px black'
            >
              {item.title}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedFood;
