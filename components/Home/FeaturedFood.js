import { Box, Button, Grid, HStack, Icon, Image, Text } from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";

import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import MyBtn from "../../shared/UI/MyBtn";
import { useRouter } from "next/router";

const featuredFood = [
  {
    title: "Fresh sardines",
    image: "https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg",
    id: "53061",
    price: 53,
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
  const dispatch = useDispatch();

  const router = useRouter();

  const addHandler = (item) => dispatch(addToCart(item));
  const buyHandler = (item) => {
    dispatch(addToCart(item));
    router.push("/checkout");
  };

  return (
    <Box>
      <MyHeading>Featured Food</MyHeading>
      <Grid
        justifyItems='center'
        columnGap='16px'
        rowGap='32px'
        gridTemplateColumns='repeat(auto-fit,minmax(300px,1fr))'
        justifyContent='center'
        // gridTemplateColumns='repeat(4,1fr)'
      >
        {featuredFood.map((item) => (
          <Box role='group' transition='all .4s' pos='relative' key={item.id}>
            <Image
              loading='lazy'
              borderRadius='10px'
              alt={item.title}
              src={item.image}
              w='320px'
              h='240px'
              boxShadow='8px 8px salmon'
              _groupHover={{
                filter: "brightness(.6)",
              }}
            />

            <Box
              bgColor='RGBA(0,0,0,.24)'
              pos='absolute'
              top='50%'
              transform='translateY(-50%) scaleX(0)'
              transformOrigin='left'
              left='4px'
              transition='all .4s'
              px='16px'
              borderRadius='10px'
              _groupHover={{
                transform: "translateY(-50%) scaleX(1)",
              }}
            >
              <Text
                transition='all .4s'
                fontSize='18px'
                color='white'
                ml='4px'
                textShadow='1px 1px black'
                zIndex={4}
                marginBottom='16px'
              >
                {item.title}
              </Text>
              <HStack flexWrap='wrap'>
                <MyBtn onClick={() => addHandler(item)} bgColor='salmon'>
                  Add to cart
                </MyBtn>
                <MyBtn
                  variant='outline'
                  color='white'
                  borderColor='salmon'
                  onClick={() => buyHandler(item)}
                >
                  Buy now
                </MyBtn>
              </HStack>
            </Box>
            <Text
              fontSize='24px'
              w='fit-content'
              borderRadius='20px'
              px='32px'
              bgColor='bisque'
              pos='absolute'
              top='0px'
              left='-12px'
              transform='rotate(-20deg)'
            >
              ${item.price}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedFood;
