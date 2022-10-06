import { Container, Grid } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 64 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          style={{ width: 400, borderRadius: "7px" }}
          container
          direction="column"
          alignItems="center"
        >
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
