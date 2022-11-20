import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {

  const SignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  }
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"
          alt="Logo"
        />

        <Button onClick={SignIn} variant="outlined">Sign in with Google</Button>

      </LoginContainer>

    </Container>
  )
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;


const LoginContainer = styled.div`
  padding:100px;
  display: flex;
  flex-direction:column ;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
`;

