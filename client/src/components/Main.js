import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  direction: "rtl",
});

export default function Main() {
  const baseURL = "http://localhost:3080";

  const [cards, setCards] = useState([]);
  const getCards = useCallback(() => {
    axios
      .get(`${baseURL}/paradoxes`)
      .then((response) => {
        setCards([...response.data]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main dir="rtl">
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              פרדוקסים
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              "אמת הכוללת סתירה?!"
              <br /> פרדוקס (מיוונית עתיקה: παράδοξος – פרדוקסוס) הוא סדרה של
              טענות, שמוכיחה כי ידיעותיו או אמונותיו של האדם סותרות זו את זו.
              באופן כללי ניתן להגדיר את הפרדוקס כמושג או טענה, אשר הסיבה
              לאמיתותם הופכת בסופו של דבר להיות הסיבה להפרכתם, וחוזר חלילה.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">מה זה פרדוקס</Button>
              <Button variant="outlined">קצת עלינו</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      right={true}
                    >
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`/paradox/${card.id}`}>
                      הצג
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
