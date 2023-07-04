import { useColorMode } from "@chakra-ui/color-mode";
import { HStack, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoPython } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [desktop] = useMediaQuery("(min-width:600px)");

  return (
    <HStack padding='5' spacing='100px' justify='center' alignItems='center'>
      <Box mt={desktop ? "0" : "0"} align='flex-start'>
        <Text fontSize='5xl' fontWeight='semibold'>
          Hi, I am
        </Text>
        <Text
          fontSize='7xl'
          fontWeight='bold'
          bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
          bgClip='text'
        >
          Aira Marie Ladera
        </Text>
        <Text color={isDark ? "gray.200" : "gray.900"}>
          senior Computer Engineering Student at FEU Institute of Technology
        </Text>
        <HStack mt='100' spacing='12'>
          <Icon as={AiFillHtml5} boxSize='50' />
          <Icon as={BiLogoCss3} boxSize='50' />
          <Icon as={DiJavascript} boxSize='50' />
          <Icon as={BiLogoPython} boxSize='50' />
        </HStack>
      </Box>
      <Image
        src='https://github.com/ariaml/portfolio-try-2/blob/main/components/aira2.png?raw=true'
        alt='Aira'
      />
    </HStack>
  );
}

export default Header;
