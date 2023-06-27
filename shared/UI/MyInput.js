import { Input } from "@chakra-ui/react";
function MyInput(props) {
  return (
    <Input
      _focus={{
        borderColor: "salmon",
        boxShadow: "1px 1px salmon",
      }}
      {...props}
    />
  );
}

export default MyInput;
