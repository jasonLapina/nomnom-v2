import { Box, Grid, Image, Text } from "@chakra-ui/react";
import MyHeading from "../../shared/UI/MyHeading";
function FeaturedAreas() {
  const areas = [
    {
      str: "British",
      image: "https://cdn.wallpapersafari.com/5/3/NSJrdH.jpg",
      sample:
        "https://media.cnn.com/api/v1/images/stellar/prod/190321132023-fishfingers-1.jpg?q=w_5333,h_3000,x_0,y_0,c_fill",
    },
    {
      str: "Italian",
      image: "https://getwallpapers.com/wallpaper/full/3/2/4/656265.jpg",
      sample:
        "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    },
    {
      str: "Filipino",
      image: "https://cdn.wallpapersafari.com/38/43/KhQwvy.jpg",
      sample:
        "https://www.lutongpinoyrecipe.com/wp-content/uploads/2020/12/lutong-pinoy-pork-sinigang-1200x675.jpg",
    },
    {
      str: "Jamaican",
      image: "https://cdn.wallpapersafari.com/89/70/e5KTWG.jpg",
      sample:
        "https://www.beaches.com/blog/content/images/2020/03/Jamaican-Chicken-Rice-Peas.jpg",
    },
  ];

  return (
    <Box>
      <MyHeading>Featured Areas</MyHeading>

      <Grid
        justifyItems='center'
        gap='24px'
        gridTemplateColumns='repeat(auto-fit,minmax(320px,1fr))'
      >
        {areas.map((item) => (
          <Box
            boxShadow='2px 8px 8px RGBA(0,0,0,.24)'
            borderRadius='10px'
            cursor='pointer'
            transition='all .4s'
            _hover={{
              transform: "translateY(-16px)",
            }}
            key={item.str}
            pos='relative'
          >
            <Text
              top='16px'
              left='16px'
              pos='absolute'
              fontSize='22px'
              bgColor='white'
              px='8px'
              py='4px'
              borderRadius='10px'
            >
              {item.str}
            </Text>
            <Image
              h='200px'
              w='320px'
              src={item.image}
              alt={item.str + "food"}
              borderRadius='10px'
            />
            <Image
              pos='absolute'
              h='100px'
              w='160px'
              src={item.sample}
              alt={item.str + "food"}
              borderRadius='10px'
              bottom='-40px'
              left='-16px'
              boxShadow='2px 4px 8px RGBA(0,0,0,.24)'
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedAreas;
