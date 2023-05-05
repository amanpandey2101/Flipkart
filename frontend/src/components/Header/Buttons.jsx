import React from 'react'
import { Box, styled, Button, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Buttons = () => {

    const ButtonContain = styled(Button)`
        background:#fff;
        color:#2874f0;
        font-size: 14px; 
        box-shadow:none; 
        text-transform:none;
        border-radius:2px;
        padding:5px 40px;
          
    `;
    const Wrapper = styled(Box)`
        display: flex;
        & > Button, & > p{
            margin-right:40px;
            font-weight: bold;
            align-items:center;
            
        }
        & > p{
            margin-top:5px
        }
        font-size:15px;
           
    `
  return (
    <Wrapper>
      <ButtonContain variant='contained'>Login</ButtonContain>
      <Typography>Become a seller</Typography>
      <Typography>More</Typography>
      <Box style= {{display:'flex',marginTop:'4px', marginLeft:'25px'}}>
        <ShoppingCartIcon />
        <Typography>
            Cart</Typography>
      </Box>
    </Wrapper>
  )
}

export default Buttons
