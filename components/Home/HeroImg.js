import { useMediaQuery, Center, Image, HStack } from "@chakra-ui/react";

const dummyImages = [
  "https://raw.githubusercontent.com/jasonLapina/nomnom/master/src/assets/hero1.webp",
  "https://raw.githubusercontent.com/jasonLapina/nomnom/master/src/assets/hero3.webp",
  "https://raw.githubusercontent.com/jasonLapina/nomnom/master/src/assets/hero2.webp",
];
function HeroImg() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  if (isLargerThan768)
    return (
      <Center
        transform={{ md: "translate(-88px,-56px)", lg: "translateX(-88px)" }}
        pos='relative'
      >
        {dummyImages.map((item, i) => (
          <Image
            boxShadow='2px 4px 4px RGBA(0,0,0,.24)'
            src={item}
            key={item}
            alt={item}
            pos='absolute'
            maxW={{ md: "60%", lg: "45%" }}
            transform={{
              md: `translate(${i * 80}px,${i * 80}px)`,
              lg: `translate(${i * 120}px,${i * 34}px)`,
              xl: `translate(${i * 160}px,${i * 40}px)`,
            }}
            borderRadius='20px'
            transition='all .4s'
            _hover={{
              zIndex: 4,
              transform: {
                md: `translate(${i * 80}px,${i * 80}px) scale(1.1)`,
                lg: `translate(${i * 120}px,${i * 34}px) scale(1.1)`,
                xl: `translate(${i * 160}px,${i * 40}px) scale(1.1)`,
              },
            }}
          />
        ))}
      </Center>
    );
  else
    return (
      <HStack flexWrap='wrap' justifyContent='center'>
        {dummyImages.map((item) => (
          <Image
            boxShadow='2px 4px 4px RGBA(0,0,0,.24)'
            src={item}
            key={item}
            alt={item}
            maxW={{ base: "80px", sm: "160px" }}
            borderRadius='20px'
            transition='all .4s'
            _hover={{
              zIndex: 4,
              transform: `scale(1.1)`,
            }}
          />
        ))}
      </HStack>
    );
}

export default HeroImg;
