import React from 'react'
import { Box, styled, Typography } from '@mui/material';
import { navData } from '../constants/Data';




const Navbar = () => {
const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0px 130px;
    justify-content: space-between;  
    
`
const Container = styled(Box)`
  padding: 8px 12px;
  text-align: center;

`
const Text = styled(Typography)`
  font-size:14px;
  font-weight:600;
  font-family:inherit;
`
  return (
    <Component >
        {
        navData.map(data => (
            <Container>
                <img src={data.url} alt="nav" style = {{width:64, height:64}}/>
                <Text>{data.text}</Text>
            </Container>
        ))}
    </Component>
  )
}

export default Navbar
