import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import Cart from "../Cart/Cart";
import Searchbar from "./Searchbar";
function MobileNav({ navItems }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button bgColor='bisque' onClick={onOpen}>
        Menu
      </Button>
      <Searchbar />

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack gap='16px'>
              {navItems.map((item) => {
                return (
                  <Button
                    onClick={onClose}
                    variant='ghost'
                    fontSize='18px'
                    key={item.text}
                  >
                    <Link href={item.path}>{item.text}</Link>
                  </Button>
                );
              })}
              <Button onClick={onClose} variant='ghost' fontSize='18px'>
                <Link href='/auth'>Account</Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box ml='auto'>
        <Cart />
      </Box>
    </>
  );
}

export default MobileNav;
