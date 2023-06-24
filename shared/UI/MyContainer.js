import { Box } from "@chakra-ui/react";
function MyContainer(props) {
  return (
    <Box
      bgColor='bisque'
      px='32px'
      py='16px'
      borderRadius='10px'
      boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
      {...props}
    >
      {props.children}
    </Box>
  );
}

export default MyContainer;
