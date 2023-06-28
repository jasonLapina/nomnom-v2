import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        minH='400px'
        maxW='1440px'
        px='24px'
        mx='auto'
        mt='120px'
        mb='120px'
        overflowX='clip'
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
