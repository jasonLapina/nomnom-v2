import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import areasData from "../../data/dummy-area.json";
import MyHeading from "../../shared/UI/MyHeading";

function Area() {
  // const areas = JSON.parse(areasData);
  console.log(areasData);

  return (
    <Box>
      <MyHeading>Areas</MyHeading>
      <Grid
        columnGap='16px'
        rowGap='32px'
        gridTemplateColumns='repeat(auto-fit, minmax(280px, 1fr))'
        justifyItems='center'
        justifyContent='center'
      >
        {areasData.map((item) => (
          <Box
            pos='relative'
            cursor='pointer'
            w='280px'
            h='160px'
            key={item.strArea}
            role='group'
            as={Link}
            href={`/area/${item.strArea}`}
          >
            <Image
              loading='lazy'
              alt={item.strArea + "flag"}
              h='100%'
              w='100%'
              src={item.image}
              boxShadow='8px 8px bisque'
              transition='all .4s'
              _groupHover={{
                filter: "brightness(.6)",
              }}
            />
            <Text
              bgColor='salmon'
              fontSize='24px'
              pos='absolute'
              top='90%'
              transform='translateY(-50%)'
              px='8px'
              transition='all .4s'
              transformOrigin='left'
              visibility='hidden'
              _groupHover={{
                visibility: "visible",
                top: "50%",
              }}
            >
              {item.strArea}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Area;
