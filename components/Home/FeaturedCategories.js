import { Box, Grid, Image, Text } from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";
import Link from "next/link";

const featuredCategories = [
  {
    text: "Breakfast",
    image:
      "https://media.istockphoto.com/id/533645537/photo/breakfast-with-bacon-eggs-pancakes-and-toast.jpg?s=612x612&w=0&k=20&c=TumrEwImmLi4TIVeirgynvTpHhyvt9LeiDXLci45NWg=",
  },
  {
    text: "Beef",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-roast-beef-horizontal-1540505165.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
  },
  {
    text: "Seafood",
    image:
      "https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg",
  },
];

function FeaturedCategories() {
  return (
    <Box id='featuredCategories'>
      <MyHeading>Featured Categories</MyHeading>
      <Grid
        justifyItems='center'
        gridTemplateColumns='repeat(auto-fit,minmax(320px,1fr))'
      >
        {featuredCategories.map((item) => (
          <Box
            boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
            pos='relative'
            key={item.text}
            w='fit-content'
            borderRadius='20px'
            transition='all .4s'
            _hover={{ transform: "translateY(-16px)" }}
            as={Link}
            href={`/categories/${item.text}`}
          >
            <Image
              src={item.image}
              cursor='pointer'
              alt={item.text}
              w='400px'
              h='320px'
              borderRadius='20px'
              transition='all .4s'
              _hover={{
                filter: "brightness(80%)",
              }}
            />

            <Text
              top='8px'
              left='16px'
              pos='absolute'
              fontSize='32px'
              bgColor='white'
              px='24px'
              py='8px'
              borderRadius='20px'
            >
              {item.text}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedCategories;
