import { Box, useMediaQuery } from "@chakra-ui/react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

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
  const [isMobile] = useMediaQuery("(max-width: 767px)");

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
        px='16px'
      >
        {!isMobile && <DesktopNav navItems={navItems} />}
        {isMobile && <MobileNav navItems={navItems} />}
      </Box>
    </Box>
  );
}

export default Navbar;
