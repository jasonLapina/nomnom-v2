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
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";

import MyBtn from "../../shared/UI/MyBtn";
import { useState } from "react";
function CategoryItem(props) {
  const { category } = props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card bgColor='black' color='white' maxH='640px' maxW='480px' {...props}>
      <CardBody pos='relative'>
        <Spinner
          speed='1s'
          top='80px'
          right='54px'
          boxSize='200px'
          pos='absolute'
          opacity={isLoading ? 1 : 0}
        />
        <Image
          alt={category.strCategory}
          opacity={isLoading ? 0 : 1}
          h='344px'
          w='100%'
          src={category.strCategoryThumb}
          borderRadius='lg'
          mx='auto'
          loading='lazy'
          objectFit='cover'
          objectPosition='center'
          onLoad={() => setIsLoading(false)}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{category.strCategory}</Heading>
          <Text overflow='auto' maxH='100px'>
            {category.strCategoryDescription}
          </Text>
          {/* <Text color='blue.600' fontSize='2xl'>
            $450
          </Text> */}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <MyBtn
            as={Link}
            href={`/categories/${category.strCategory}`}
            bgColor='salmon'
          >
            Browse meals
          </MyBtn>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CategoryItem;
