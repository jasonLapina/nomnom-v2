import {
  Box,
  Grid,
  HStack,
  Heading,
  Icon,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import MyHeading from "../shared/UI/MyHeading";

import { BsDiscord, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
function contact() {
  return (
    <Box>
      <MyHeading>Contact us</MyHeading>

      <Grid
        maxW='1080px'
        mx='auto'
        gridTemplateColumns={{ base: "1fr", md: "35fr 65fr" }}
      >
        <Box py='16px' px='24px'>
          <Heading textAlign='center' fontWeight='normal'>
            Our <strong>Socials</strong>
          </Heading>
          <Grid
            justifyItems='center'
            gridTemplateColumns={{ base: "1fr 1fr", md: "1fr" }}
            rowGap={{ base: "16px" }}
            fontSize='40px'
          >
            <Icon as={BsFacebook} color='facebook.500' />
            <Icon as={BsDiscord} color='#7289da' />
            <Icon as={BsTwitter} color='twitter.500' />
            <Icon as={BsYoutube} color='red.500' />
          </Grid>
        </Box>
        <Box py='16px' px='24px'>
          <Heading textAlign='center' fontWeight='normal'>
            Get in <strong>touch</strong> via Email
          </Heading>
          <Box>
            <HStack flexWrap={{ base: "wrap", sm: "nowrap" }}>
              <Input
                placeholder='name'
                _focus={{
                  borderColor: "salmon",
                  boxShadow: "1px 1px salmon",
                }}
              />
              <Input
                placeholder='email'
                _focus={{
                  borderColor: "salmon",
                  boxShadow: "1px 1px salmon",
                }}
              />
            </HStack>

            <Select
              placeholder='General'
              _focus={{
                borderColor: "salmon",
                boxShadow: "1px 1px salmon",
              }}
              mt='24px'
            >
              <option value='option1'>General</option>
              <option value='option3'>Partnership</option>
              <option value='option2'>Jobs</option>
              <option value='option3'>Complaints</option>
            </Select>

            <Textarea
              mt='24px'
              placeholder='message'
              _focus={{
                borderColor: "salmon",
                boxShadow: "1px 1px salmon",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default contact;
