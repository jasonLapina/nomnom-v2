import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function CartItems() {
  const cartItems = useSelector((state) => state.cart);

  if (cartItems.length === 0) return <Heading>Your cart is empty.</Heading>;

  return (
    <VStack gap='24px'>
      {cartItems.map((item) => (
        <HStack
          fontSize='20px'
          w='100%'
          alignItems='end'
          key={item.id + Math.random() * 10}
          gap='16px'
          borderBottom='solid 1px gray'
          paddingBottom='8px'
        >
          <Text pr='56px'>{item.title}</Text>
          <Text>x{item.quantity}</Text>
          <Text fontWeight='bold' ml='auto'>
            {item.price}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
}

export default CartItems;
