import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function CartItems() {
  const cartItems = useSelector((state) => state.cart);

  if (cartItems.length === 0) return <Heading>Your cart is empty.</Heading>;

  return (
    <VStack>
      {cartItems.map((item) => (
        <HStack
          fontSize='20px'
          w='100%'
          alignItems='start'
          key={item.id + Math.random() * 10}
          gap='16px'
        >
          <Text pr='8px'>{item.title}</Text>
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
