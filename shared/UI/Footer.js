import {
  Box,
  Grid,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFacebook, BsTwitter, BsYoutube, BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <Box bgColor='bisque' borderTop='solid 1px RGBA(0,0,0,.24)' mt='160px'>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          lg: "1.5fr repeat(4,1fr)",
        }}
        maxW='1340px'
        px='24px'
        mx='auto'
        py='40px'
        rowGap='40px'
        justifyItems='center'
        textAlign={{ base: "center", lg: "left" }}
      >
        <Box
          gridColumn={{ base: "span 1", sm: "span 2", lg: "span 1" }}
          mt='-24px'
          mb={{ base: "40px", lg: "0px" }}
          display='grid'
          justifyItems='center'
        >
          <Heading color='salmon' fontSize='56px' mb='40px'>
            NomNom
          </Heading>
          <HStack fontSize='32px' gap='24px'>
            <Icon cursor='pointer' as={BsFacebook} color='facebook.500' />
            <Icon cursor='pointer' as={BsTwitter} color='twitter.500' />
            <Icon cursor='pointer' as={BsYoutube} color='red.500' />
            <Icon cursor='pointer' color='#7289da' as={BsDiscord} />
          </HStack>
          <Text
            textAlign='center'
            mt='40px'
            opacity='.7'
            fontSize='14px'
            px='24px'
          >
            Copyright © 2023 by NomNom, Inc. All rights reserved.{" "}
          </Text>
        </Box>
        <Box>
          <Heading fontSize='20px' opacity='.6' mb='40px'>
            Contact us
          </Heading>
          <Box opacity='.7'>
            <Text as='address' mb='40px'>
              Santa Rosa, Laguna. Tabi tabi st., jan-jan lang building.
            </Text>
            <Text>+(63) 9563090839</Text>
            <a>NomNom@jmail.com</a>
          </Box>
        </Box>
        <Box>
          <Heading fontSize='20px' opacity='.6' mb='40px'>
            About
          </Heading>
          <VStack opacity='.7' alignItems='left' gap='24px'>
            <Text>About us</Text>
            <Text>Awards</Text>
            <Text>Blog</Text>
          </VStack>
        </Box>
        <Box>
          <Heading fontSize='20px' opacity='.6' mb='40px'>
            Company
          </Heading>
          <VStack opacity='.7' alignItems='left' gap='24px'>
            <Text>Business</Text>
            <Text>Sellers</Text>
            <Text>Careers</Text>
          </VStack>
        </Box>
        <Box>
          <Heading fontSize='20px' opacity='.6' mb='40px'>
            Resources
          </Heading>
          <VStack opacity='.7' alignItems='left' gap='24px'>
            <Text>Directory</Text>
            <Text>Help center</Text>
            <Text>Privacy & terms</Text>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
