import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProductDetails = () => {
  return (
    <Box sx={{display:"flex", alignItems:"center",gap:2.5,flexDirection:{xs:"column",sm:"row"}}}>
      <Box display={"flex"}>
        <img width={300} src="src/images/pants.avif" alt="pants" />
      </Box>

      <Box sx={{textAlign:{xs:"center",sm:"left"}}}>
      <Typography variant="h5" >
                  Iphones 14, 14 plus, 14 pro, 14 pro max
                </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant='subtitle1' component="p">
                  $12.99
                </Typography>
              <Typography variant="body1" >
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica.
              </Typography>
              <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={2}>
                {["src/images/tshirt2.webp","src/images/tshirt.jpg"].map((item)=>{
                  return(
                   <img style={{borderRadius:3}} width={90} height={100}  key={item} src={item} alt=""/>
                  );
                })}
              </Stack>
              <Button sx={{mb: {xs:1,sm:0},textTransform:'capitalize'}} variant="contained">
              <AddShoppingCartOutlined sx={{mr:1}} fontSize="small"/>
                Buy now
              </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
