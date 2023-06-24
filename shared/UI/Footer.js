import { Box, Grid, HStack, Heading, Icon, Text } from "@chakra-ui/react";
import { BsFacebook, BsDiscord, BsTwitter, BsYoutube } from "react-icons/bs";

const socIcons = [
  { icon: BsFacebook, color: "facebook.500" },
  { icon: BsDiscord, color: "#7289da" },
  { icon: BsTwitter, color: "twitter.500" },
  { icon: BsYoutube, color: "red.500" },
];

function Footer() {
  return (
    <Box minH='200px' mt='120px' w='100%' borderTop='solid 1px RGBA(0,0,0,.5)'>
      <Grid
        mx='auto'
        maxW='1440px'
        gridTemplateColumns='1.5fr repeat(4,1fr)'
        gap='16px'
        py='16px'
      >
        <Box>
          <Heading color='salmon'>NomNom</Heading>
          <HStack gap='16px'>
            {socIcons.map((item, i) => (
              <Icon fontSize='32px' key={i} as={item.icon} color={item.color} />
            ))}
          </HStack>
          <Text pr='40px' mt='24px'>
            Copyright © 2022 by NomNom, Inc. All rights reserved.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
