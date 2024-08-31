import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Rating,
  Dialog,
  CardContent,
  CardMedia,
  Button,
  Card,
  CardActions,
  IconButton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCart";
import Close from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";

const Main = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [myData, setMyData] = useState("products?populate=*");

  const handleAlignment = (event, newValue) => {
    if (newValue) {
      setMyData(newValue);
    }
  };

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  if (isLoading) {
    return <Typography variant="h6">LOADING...</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error.message}</Typography>;
  }

  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={myData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            gap: 1,
            p: 1,
            ".MuiToggleButtonGroup-grouped": {
              border: "1px solid rgba(233,69,96,0.5) !important",
              "&.Mui-selected": {
                border: "1px solid rgba(233,69,96,0.8) !important",
                color: "#E94560",
                backgroundColor: "initial",
              },
            },
          }}
        >
          <ToggleButton
            sx={{
              color: theme.palette.text.primary,
              borderRadius: 1,
              textTransform: "none",
              px: 2,
            }}
            value="products?populate=*"
            aria-label="all products"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{
              color: theme.palette.text.primary,
              borderRadius: 1,
              textTransform: "none",
              px: 2,
            }}
            value="products?populate=*&filters[category][$eq]=men"
            aria-label="men category"
          >
            Men Category
          </ToggleButton>
          <ToggleButton
            sx={{
              color: theme.palette.text.primary,
              borderRadius: 1,
              textTransform: "none",
              px: 2,
            }}
            value="products?populate=*&filters[category][$eq]=women"
            aria-label="women category"
          >
            Women Category
          </ToggleButton>
          <ToggleButton
            sx={{
              color: theme.palette.text.primary,
              borderRadius: 1,
              textTransform: "none",
              px: 2,
            }}
            value="products?populate=*&filters[category][$eq]=electronics"
            aria-label="electronics category"
          >
            Electronics Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data?.data.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 333,
              mt: 6,
              ":hover .MuiCardMedia-root": {
                scale: "1.1",
                transition: "0.35s",
              },
            }}
          >
            <CardMedia
              component="img"
              height="277"
              image={`${item.attributes.productimg.data[0].attributes.url}`}
              title={`${item.attributes.productTitle}`}
            />
            <CardContent>
              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.attributes.productTitle}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {item.attributes.productPrice} $
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.attributes.productDescription}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                sx={{ textTransform: "capitalize" }}
                size="small"
                onClick={() => handleClickOpen(item)}
              >
                <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" /> Add to Cart
              </Button>
              <Button size="small">
                <Rating precision={0.1} name="read-only" value={item.attributes.productRating} readOnly />
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>

      {/* Dialog Component */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
      >
        <IconButton
          sx={{
            ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        {selectedProduct && <ProductDetails clickedProduct={selectedProduct} />}
      </Dialog>
    </Container>
  );
};

export default Main;
