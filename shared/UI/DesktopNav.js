import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Cart from "../Cart/Cart";

import { AiOutlineUser } from "react-icons/ai";
function DesktopNav({ navItems }) {
  return (
    <>
      {navItems.map((item) => (
        <Button
          _hover={{ bgColor: "bisque" }}
          as={Link}
          href={item.path}
          key={item.text}
          variant='ghost'
        >
          {item.text}
        </Button>
      ))}
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
      <HStack gap='24px' ml='auto'>
        <Box cursor='pointer' as={Link} href='/auth'>
          <Icon color='salmon' fontSize='32px' as={AiOutlineUser} />
        </Box>
        <Cart />
      </HStack>
    </>
  );
}

export default DesktopNav;
