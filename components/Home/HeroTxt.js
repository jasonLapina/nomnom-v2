import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";
import HeroCustomers from "./HeroCustomers";
import MyBtn from "../../shared/UI/MyBtn";
function HeroTxt() {
  return (
    <Box mt='80px'>
      <MyHeading textAlign='left' mt='0px' mb='24px'>
        Lorem Ipsum
      </MyHeading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        dolor harum facere velit ullam inventore autem veritatis suscipit
        officia ipsum corrupti saepe perferendis nihil corporis odit magnam,
        officia ipsum corrupti saepe perferendis nihil corporis odit magnam,
        doloribus quod recusandae.
      </Text>
      <HStack gap='16px' mt='40px'>
        {/* <Button>Discover</Button> */}
        <MyBtn bgColor='salmon'>Sign up</MyBtn>
        <MyBtn
          onClick={() =>
            window.scrollTo({
              behavior: "smooth",
              top:
                document
                  .getElementById("featuredCategories")
                  .getBoundingClientRect().top - 80,
            })
          }
          borderColor='salmon'
          variant='outline'
        >
          Discover
        </MyBtn>
      </HStack>
      <HeroCustomers />
    </Box>
  );
}

export default HeroTxt;
