import { Box, Heading } from "@chakra-ui/react";
function MyHeading(props) {
  return (
    <Heading textAlign='center' mb='32px' {...props}>
      <Box as='span' color='salmon' fontSize='64px'>
        {props.children.slice(0, 1)}
      </Box>
      {props.children.slice(1)}
    </Heading>
  );
}

export default MyHeading;
