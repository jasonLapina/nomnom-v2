import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import MyHeading from "../shared/UI/MyHeading";

const aboutUs = ["Mission", "Vision", "Awards", "Our Team"];

function about() {
  return (
    <Box>
      <MyHeading>About us</MyHeading>
      <Grid alignItems='center' rowGap='40px' gridTemplateColumns='1fr 1fr'>
        {aboutUs.map((item) => (
          <Box key={item}>
            <Heading>{item}</Heading>
            <Text pr='32px'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eius
              ex magnam, asperiores corporis consectetur excepturi molestiae
              minus eos aut? Nihil voluptates dolor debitis. Amet debitis iusto
              eligendi non dolore!
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default about;
