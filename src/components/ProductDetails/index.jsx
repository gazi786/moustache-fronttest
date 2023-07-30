import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Button,
  CardMedia,
  Container,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import CustomRadioButton from "../Utils/CustomRadioButton";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    // Fetch product details from the API
    axios
      .get(
        "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
      )
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, []);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    // Check if the selected size is already in the cart
    const existingItem = cartItems.find((item) => item.size === selectedSize);

    if (existingItem) {
      // Increment quantity if the item is already in the cart
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add the new item to the cart
      setCartItems((prevCart) => [
        ...prevCart,
        { size: selectedSize, quantity: 1 },
      ]);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="lg">
        {/* Product details */}
        {product && (
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            key={product.id}
          >
            <Grid item xs>
              <CardMedia
                component="img"
                image={product.imageURL}
                alt={product.title}
              />
            </Grid>
            <Grid item xs>
              <Stack direction="column" spacing={2}>
                <Typography variant="h4">{product.title}</Typography>

                <Typography variant="h6">{`${product.price}`}</Typography>

                <Typography variant="p">{product.description}</Typography>

                <FormControl>
                  <FormLabel id="size-select">
                    <Typography
                      variant="p"
                      sx={{ color: "#888888", fontWeight: "bolder" }}
                    >
                      SIZE
                      <sup style={{ color: "#C90000", fontWeight: "bolder" }}>
                        *
                      </sup>
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="size-select"
                    name="sizes"
                    value={value}
                    onChange={handleSizeSelect}
                  >
                    {product.sizeOptions.map((size) => (
                      <CustomRadioButton
                        key={size.id}
                        value={size.label}
                        label={size.label}
                        selectedValue={selectedSize}
                        onChange={handleSizeSelect}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <Box>
                  <Button variant="outlined" onClick={handleAddToCart}>
                    ADD TO CART
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ProductDetails;
