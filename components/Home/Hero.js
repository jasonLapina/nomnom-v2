import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import HeroTxt from "./HeroTxt";
import HeroImg from "./HeroImg";
function Hero() {
  return (
    <Box minH='600px'>
      <Grid gridTemplateColumns='1fr 1fr' gap='48px'>
        <HeroTxt />
        <HeroImg />
      </Grid>
    </Box>
  );
}

export default Hero;
