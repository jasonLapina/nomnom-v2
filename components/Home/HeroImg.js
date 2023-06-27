import { Box, Image } from "@chakra-ui/react";

const dummyImages = [
  "https://nomnom-kappa.vercel.app/static/media/hero1.a3861ff6cd5adf172eab.webp",
  "https://nomnom-kappa.vercel.app/static/media/hero3.1923697d189c0c71f344.webp",
  "https://nomnom-kappa.vercel.app/static/media/hero2.926bff97dd231472206e.webp",
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
