import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  HStack,
} from "@chakra-ui/react";
import MyBtn from "../../shared/UI/MyBtn";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { useRouter } from "next/router";

function MealItem({ meal }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCartHandler = () => {
    // dispatch(addToCart(meal));
    dispatch(addToCart(meal));
  };

  const buyNowHandler = () => {
    dispatch(addToCart(meal));
    router.push("/checkout");
  };

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          loading='lazy'
          alt={meal.title}
          h='344px'
          w='320px'
          src={meal.image}
          borderRadius='lg'
          mx='auto'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{meal.title}</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            nesciunt! Eius magnam magni nobis incidunt nostrum cupiditate
            deleniti, error soluta aliquid sit debitis facilis nihil iure
            recusandae odit fugiat. Quidem!
          </Text>
          {/* <Text color='blue.600' fontSize='2xl'>
            $450
          </Text> */}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack w='100%' justifyContent='space-between'>
          <ButtonGroup spacing='2'>
            <MyBtn onClick={addToCartHandler} bgColor='salmon'>
              Add to cart
            </MyBtn>
            <MyBtn
              onClick={buyNowHandler}
              variant='outline'
              borderColor='salmon'
            >
              Buy now
            </MyBtn>
          </ButtonGroup>
          <Text fontSize='24px'>${meal.price}</Text>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default MealItem;
