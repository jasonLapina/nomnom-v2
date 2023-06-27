import { AddIcon, Icon, MinusIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import {
  BsFillCartPlusFill,
  BsFillCartDashFill,
  BsFillCartXFill,
} from "react-icons/bs";
import { addOneMore, subtractOne } from "../../store/cart";
function CartItems() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0) return <Heading>Your cart is empty.</Heading>;

  const addHandler = (item) => {
    dispatch(addOneMore(item));
  };

  const subtractHandler = (item) => {
    dispatch(subtractOne(item));
  };

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
          <Text w='120px'>{item.title}</Text>
          <HStack>
            <Icon
              cursor='pointer'
              as={item.quantity === 1 ? BsFillCartXFill : BsFillCartDashFill}
              color='red.500'
              onClick={() => subtractHandler(item)}
            />
            <Text>x{item.quantity}</Text>
            <Icon
              onClick={() => addHandler(item)}
              cursor='pointer'
              color='green.500'
              as={BsFillCartPlusFill}
            />
          </HStack>
          <Text fontWeight='bold' ml='auto'>
            {item.price}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
}

export default CartItems;
