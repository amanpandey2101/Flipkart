import React from 'react'
import {AppBar, Toolbar,Box, styled, Typography, Button} from "@mui/material"
import Search from './Search'
import Buttons from './Buttons'

const StyleHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Component = styled(Box)`
    line-height:0;
    margin-left:12%;
`
const SubHeading = styled(Typography)`
  font-size:10px;
  font-style:italic;
`;
const CustomButtonWrapper = styled(Box)`
  margin:0 5% 0 auto;
`
const PlusImage = styled("img")({
  width:10,
  height:10,
  paddingLeft:2
})

const Header = () => {

  const logoURL = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyleHeader>
        <Toolbar style={{minHeight:'55px'}}>
          <Component>
            <img src={logoURL} alt="logo" style = {{width: 75}}/>
            <Box style = {{display:'flex'}}>
              <SubHeading>Explore&nbsp;
                <Box component = "span" style = {{color:'#ffe500'}}>Plus</Box>
                </SubHeading>
                <PlusImage src={subURL} alt="logo" />
            </Box>
          </Component>
          <Search/>
          <CustomButtonWrapper>
          <Buttons/>
          </CustomButtonWrapper>
        </Toolbar>
    </StyleHeader>
  )
}

export default Header
