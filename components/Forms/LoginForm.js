import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import MyInput from "../../shared/UI/MyInput";
import MyBtn from "../../shared/UI/MyBtn";
import { useState } from "react";
function LoginForm({ onSignup }) {
  const [showForgot, setShowForgot] = useState(false);

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
        <MyInput placeholder='name or email' />
      </HStack>
      <HStack>
        <MyInput placeholder='password' />
      </HStack>
      <MyInput placeholder='location' />

      <VStack alignItems='normal'>
        <MyBtn bgColor='salmon'>Log in</MyBtn>
        <VStack mt='16px' alignItems='normal'>
          <Text textAlign='center'>Don&apos;t have an account yet?</Text>
          <MyBtn onClick={onSignup} mx='auto' w='fit-content' bgColor='bisque'>
            Sign up
          </MyBtn>
          <Button
            onClick={() => setShowForgot(true)}
            mt='24px'
            variant='link'
            opacity='.7'
          >
            Forgot password
          </Button>
          {showForgot && (
            <VStack>
              <MyInput placeholder='email to receive password reset link' />
              <MyBtn
                onClick={onSignup}
                mx='auto'
                w='fit-content'
                bgColor='bisque'
              >
                Send reset token
              </MyBtn>
              <Button onClick={() => setShowForgot(false)} variant='link'>
                cancel
              </Button>
            </VStack>
          )}
        </VStack>
      </VStack>
    </VStack>
  );
}

export default LoginForm;
