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
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItems from "./CartItems";
import MyBtn from "../UI/MyBtn";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart";

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const clearCartHandler = () => dispatch(clearCart());

  return (
    <>
      <Box>
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
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <CartItems />
          </DrawerBody>

          <DrawerFooter>
            <HStack gap='24px'>
              <MyBtn bgColor='salmon'>Checkout</MyBtn>
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
