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
} from "@chakra-ui/react";
import Link from "next/link";

import MyBtn from "../../shared/UI/MyBtn";
function CategoryItem({ category }) {
  return (
    <Card maxH='640px' maxW='480px'>
      <CardBody>
        <Image
          alt={category.strCategory}
          h='344px'
          w='320px'
          src={category.strCategoryThumb}
          borderRadius='lg'
          mx='auto'
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
