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
  Button,
  HStack,
} from "@chakra-ui/react";
import MyBtn from "../../shared/UI/MyBtn";

function MealItem({ meal }) {
  const price = meal.id.slice(0, 2);

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
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
            <MyBtn bgColor='salmon'>Add to cart</MyBtn>
            <MyBtn variant='outline' borderColor='salmon'>
              Buy now
            </MyBtn>
          </ButtonGroup>
          <Text fontSize='24px'>${price}</Text>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default MealItem;
