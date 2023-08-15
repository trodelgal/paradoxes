import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";
import Box from "@mui/material/Box";

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
      .get(`${baseURL}/paradoxById/${id}`)
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
          <h2 style={{ marginBottom: 0 }}>{paradox.author}</h2>
          <Box style={{ padding: "0 20px" }}>
            <div>{paradox.about}</div>
          </Box>
          <hr></hr>
          <h2 style={{ marginBottom: 0 }}>תיאור</h2>
          <Box style={{ padding: "0 20px" }}>
            <div>{paradox.content}</div>
          </Box>
          <hr></hr>
          <h2 style={{ marginBottom: 0 }}>גישות ליישובו</h2>
          <Box style={{ padding: "0 20px" }}>
            <div>{paradox.solution}</div>
          </Box>
        </main>
      </Container>
    </ThemeProvider>
  );
}
