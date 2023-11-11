// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React from "react";
import "./styles/Colors.css";
import Grid from "@mui/material/Grid";
import "./styles/Global.css";
// ------------------------------------------------------
// Components
// ------------------------------------------------------
import HeroLeft from "./components/HeroLeftComponent/HeroLeft";
import HeroRight from "./components/HeroRightComponent/HeroRight";
import Header from "./Layout/Header";

function App() {
  return (
    <>
      <Grid container spacing={0} className="bg-color-1">
        <Grid xs={12} md={6}>
          <Header />
          <HeroLeft />
        </Grid>
        <Grid xs={12} md={6}>
          <HeroRight />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
