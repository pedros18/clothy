import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{bgcolor:"#2B3445",py:1.3,borderTopLeftRadius: "14px",borderTopRightRadius:"14px"}}>
      <Typography justifyContent={"center"} display={"flex"} alignItems={"center"} color={"HighlightText"} variant='h6' sx={{fontSize:18}}>
        Designed and developed by 
        <Button sx={{mx:0.5,fontSize:"18px",textTransform:"capitalize",color:"ff7790"}} variant='text' color='primary'>
         Badreddine Sayah
        </Button>
        @2024
      </Typography>
    </Box>
  )
}

export default Footer