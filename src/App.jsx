import { Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { myCustomtheme } from "./theme";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <ThemeProvider theme={myCustomtheme}>
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Navigation />
        <ProductDetails cartItems={cartItems} setCartItems={setCartItems} />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
