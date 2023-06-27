import { Box } from "@chakra-ui/react";
import SignupForm from "../components/Forms/SignupForm";
import LoginForm from "../components/Forms/LoginForm";
import { useState } from "react";
function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Box>
      {showLogin && <LoginForm onSignup={() => setShowLogin(false)} />}
      {!showLogin && <SignupForm onLogin={() => setShowLogin(true)} />}
    </Box>
  );
}

export default Auth;
