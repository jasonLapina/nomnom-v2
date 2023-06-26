import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Cart from "../Cart/Cart";

export const navItems = [
  { text: "Home", path: "/" },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  return (
    <Box
      boxShadow='0 8px 8px RGBA(0,0,0,.24)'
      position='fixed'
      w='100%'
      top='0'
      left='0'
      h='80px'
      zIndex='99'
      bgColor='white'
    >
      <Box
        mx='auto'
        maxW='1440px'
        w='100%'
        h='100%'
        display='flex'
        alignItems='center'
        gap='32px'
      >
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
            <MenuItem
              as={Link}
              href='/categories'
              _hover={{ bgColor: "bisque" }}
            >
              Category
            </MenuItem>
            <MenuItem as={Link} href='/area' _hover={{ bgColor: "bisque" }}>
              Area
            </MenuItem>
          </MenuList>
        </Menu>
        <Box ml='auto'>
          <Cart />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
