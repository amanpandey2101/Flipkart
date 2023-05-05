import { Box,styled } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

const Home = () => {
const Component = styled(Box)`
  padding: 8px 8px;
  background: #DCDEE1;
`

  return (
    <>
      <Navbar/>
      <Component>
        <Banner/>
      </Component>
      
    </>
  )
}

export default Home

