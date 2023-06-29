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
function MobileNav({ navItems }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button bgColor='bisque' onClick={onOpen}>
        Menu
      </Button>
      <Menu>
        <MenuButton
          as={Button}
          variant='outline'
          rightIcon={<ChevronDownIcon />}
          borderColor='salmon'
        >
          Browse by
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} href='/categories' _hover={{ bgColor: "bisque" }}>
            Category
          </MenuItem>
          <MenuItem as={Link} href='/area' _hover={{ bgColor: "bisque" }}>
            Area
          </MenuItem>
        </MenuList>
      </Menu>
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
              <HStack
                as={Link}
                href='/auth'
                fontSize='18px'
                gap='16px'
                onClick={onClose}
                justify='center'
                fontWeight='bold'
              >
                <Text>Account</Text>
                <Icon as={AiOutlineUser} />
              </HStack>
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
