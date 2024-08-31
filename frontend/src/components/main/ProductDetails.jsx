import { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";

const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  // Debugging line to check the data structure
  useEffect(() => {
    console.log("Product Details:", clickedProduct);
  }, [clickedProduct]);

  // Check if clickedProduct is available and has the necessary structure
  if (!clickedProduct || !clickedProduct.attributes) {
    return <Typography variant="h6">Product details are not available.</Typography>;
  }

  // Destructure attributes and set default values
  const {
    productTitle = "Product Title",
    productPrice = "0.00",
    productDescription = "No description available",
    productimg = { data: [] },
  } = clickedProduct.attributes;

  // Get the URL of the selected image or use a fallback URL
  const imageUrl =
    productimg.data[selectedImg]?.attributes?.url ||
    "https://via.placeholder.com/360"; // Fallback image URL

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {/* Main Product Image */}
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={imageUrl}
          alt={productTitle}
          onError={(e) => (e.target.src = "https://via.placeholder.com/360")} // Set fallback if the image fails to load
        />
      </Box>

      {/* Product Details */}
      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${productPrice}
        </Typography>
        <Typography variant="body1">{productDescription}</Typography>

        {/* Image Toggle Buttons */}
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            onChange={(event, newValue) => setSelectedImg(newValue)}
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {productimg.data.map((item, index) => (
              <ToggleButton
                key={item.id}
                value={index}
                sx={{
                  width: "110px",
                  height: "110px",
                  mx: 1,
                  p: "0",
                  opacity: "0.5",
                }}
              >
                <img
                  onClick={() => setSelectedImg(index)}
                  style={{ borderRadius: 3 }}
                  height={"100%"}
                  width={"100%"}
                  src={item.attributes.url || "https://via.placeholder.com/110"}
                  alt={`Thumbnail ${index}`}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/110")}
                />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        {/* Buy Now Button */}
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
