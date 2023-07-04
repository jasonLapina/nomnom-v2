import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { GiGraduateCap, GiSportMedal } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";

function demo() {
  const content = [
    {
      text: "Education",
      icon: GiGraduateCap,
    },
    {
      text: "Accomplishments",
      icon: GiSportMedal,
    },
    {
      text: "Contact me",
      icon: AiOutlineMail,
    },
  ];

  return (
    <HStack gap='16px'>
      {content.map((item, i) => (
        <Box
          p='40px'
          bgColor={i === content.length - 1 ? "blue.100" : "red.100"}
          w='320px'
          key={item.text}
          borderRadius='10px'
          role='group'
        >
          <VStack gap='24px' alignItems='start'>
            <Icon fontSize='40px' as={item.icon} />
            <Text>{item.text}</Text>
            <Text
              transition='all .4s'
              _groupHover={{
                opacity: 1,
                transform: "translateY(0)",
              }}
              opacity='0'
              transform='translateY(80px)'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              sequi optio, neque laboriosam similique hic odit nobis iste rem
              placeat dolor saepe iusto ducimus quo est harum doloribus
              praesentium quam!
            </Text>
          </VStack>
        </Box>
      ))}
    </HStack>
  );
}

export default demo;
