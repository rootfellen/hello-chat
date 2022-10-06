import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "../../main";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar color={"primary"} position="static">
      <Toolbar>
        <Grid container justifyContent="flex-end">
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              color="secondary"
              variant="outlined"
            >
              Log out
            </Button>
          ) : (
            <Link to={LOGIN_ROUTE}>
              <Button color="secondary" variant="contained">
                Log in
              </Button>
            </Link>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
