import { Button, HStack, VStack } from "@chakra-ui/react";
import MyInput from "../../shared/UI/MyInput";
import MyBtn from "../../shared/UI/MyBtn";
function SignupForm({ onLogin }) {
  return (
    <VStack
      px='48px'
      py='24px'
      borderRadius='20px'
      boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
      gap='16px'
      alignItems='normal'
      as='form'
      maxW='780px'
      mx='auto'
    >
      <HStack>
        <MyInput placeholder='name' />
        <MyInput placeholder='email' />
      </HStack>
      <HStack>
        <MyInput placeholder='password' />
        <MyInput placeholder='confirm password' />
      </HStack>
      <MyInput placeholder='location' />
      <MyBtn bgColor='salmon'>Sign up</MyBtn>
      <Button onClick={onLogin} variant='link'>
        back to login
      </Button>
    </VStack>
  );
}

export default SignupForm;
