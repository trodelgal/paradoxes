import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";
import Main from "./Main";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  direction: "rtl",
});

export default function SingleParadox() {
  const baseURL = "http://localhost:3080";
  let { id } = useParams();

  const [paradox, setParadox] = useState({});
  const getParadox = useCallback(() => {
    console.log(id);
    axios
      .get(`${baseURL}/paradox/${id}`)
      .then((response) => {
        console.log(response.data);
        setParadox(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    getParadox();
  }, [getParadox]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main dir="rtl">
          <MainFeaturedPost post={paradox} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" paradox={paradox} /> */}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
