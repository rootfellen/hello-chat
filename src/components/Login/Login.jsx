import React, { useContext } from "react";
import { Container, Grid, Box, Button } from "@mui/material";
import { Context } from "../../main";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
  };
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 64 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          style={{ width: 400, background: "#201f1f", borderRadius: "7px" }}
          container
          direction="column"
          alignItems="center"
        >
          <Box p={5}>
            <Button onClick={login} variant="contained">
              Log in with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
