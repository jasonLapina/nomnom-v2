import { Box, Grid } from "@chakra-ui/react";
import HeroTxt from "./HeroTxt";
import HeroImg from "./HeroImg";
function Hero() {
  return (
    <Box
      bgColor='bisque'
      borderRadius='20px'
      boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
      px={{ base: "12px", sm: "32px" }}
      py='16px'
      minH='600px'
    >
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1.2fr 1fr", lg: "1fr 1fr" }}
        gap='48px'
      >
        <HeroTxt />
        <HeroImg />
      </Grid>
    </Box>
  );
}

export default Hero;
