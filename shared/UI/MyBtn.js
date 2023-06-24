import { Button } from "@chakra-ui/react";
function MyBtn(props) {
  return (
    <Button
      transition='all .4s'
      _hover={{
        color: "white",
        bgColor: "black",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default MyBtn;
