import { Box, Image } from "@chakra-ui/react";

const dummyImages = [
  "https://raw.githubusercontent.com/jasonLapina/nomnom/master/src/assets/hero1.webp",
  "https://raw.githubusercontent.com/jasonLapina/nomnom/master/src/assets/hero3.webp",
  "https://raw.githubusercontent.com/jasonLapina/nomnom/master/src/assets/hero2.webp",
];
function HeroImg() {
  return (
    <Box>
      {dummyImages.map((item, i) => (
        <Image
          boxShadow='2px 4px 4px RGBA(0,0,0,.24)'
          src={item}
          key={item}
          alt={item}
          pos='absolute'
          maxW='320px'
          transform={`translate(${i * 200}px,${i * 40}px)`}
          borderRadius='20px'
          transition='all .4s'
          _hover={{
            zIndex: 4,
            transform: `translate(${i * 200}px,${i * 40}px) scale(1.1)`,
          }}
        />
      ))}
    </Box>
  );
}

export default HeroImg;
