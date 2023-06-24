import { HStack, Image, Text } from "@chakra-ui/react";

const users = [
  "https://randomuser.me/api/portraits/women/75.jpg",
  "https://randomuser.me/api/portraits/women/84.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/women/59.jpg",
  "https://randomuser.me/api/portraits/men/84.jpg",
  "https://randomuser.me/api/portraits/men/81.jpg",
];

function HeroCustomers() {
  return (
    <HStack mt='40px' alignItems='center'>
      <HStack ml='32px'>
        {users.map((item, i) => (
          <Image
            borderRadius='full'
            src={item}
            key={i}
            alt='random user'
            w='64px'
            border='4px solid white'
            ml='-32px'
          />
        ))}
      </HStack>
      <Text fontSize='18px'>
        Over <strong>1 million+</strong> satisfied users.
      </Text>
    </HStack>
  );
}

export default HeroCustomers;
