import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Icon,
  Button,
  HStack,
  Circle,
  Text,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItems from "./CartItems";
import MyBtn from "../UI/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cart";
import Link from "next/link";

function Cart({ placement = "right" }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const clearCartHandler = () => dispatch(clearCart());
  const cart = useSelector((state) => state.cart);

  const itemQuantities = cart.map((item) => item.quantity);
  const totalCartItems = itemQuantities.reduce(
    (acc, curVal) => acc + curVal,
    0
  );

  const getTotal = cart
    .map((item) => item.price)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <Box pos='relative'>
        {cart.length > 0 && (
          <Circle
            color='white'
            bgColor='black'
            pos='absolute'
            px='8px'
            right='-8px'
            top='-12px'
          >
            {totalCartItems}
          </Circle>
        )}
        <Icon
          color='salmon'
          fontSize='32px'
          onClick={onOpen}
          as={AiOutlineShoppingCart}
          cursor='pointer'
        />
      </Box>

      <Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <CartItems />
            {cart.length !== 0 && (
              <Text mt='24px' fontSize='22px' textAlign='right'>
                <strong>Total</strong>: {getTotal}
              </Text>
            )}
          </DrawerBody>

          <DrawerFooter>
            <HStack gap='24px'>
              <MyBtn
                onClick={onClose}
                as={Link}
                href='/checkout'
                bgColor='salmon'
              >
                Checkout
              </MyBtn>
              <Button
                _hover={{ borderColor: "red" }}
                variant='outline'
                onClick={clearCartHandler}
              >
                Clear cart
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
