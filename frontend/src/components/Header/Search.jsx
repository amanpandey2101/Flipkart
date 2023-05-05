import { InputBase,Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Search = () => {

const SearchContainer = styled(Box)`
    background: #fff;
    width:35%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
    
`;
const SearchInput = styled(InputBase)`
    width:100%;
    padding-left:15px;

    
`
  return (
    <SearchContainer>
        <SearchInput
        placeholder='Search for products, brands and more'
        />
        <Box>
        <SearchIcon style={{color:'#3F83F3', padding:'5px', cursor:"pointer", display:'flex'}}/>
        </Box>
    </SearchContainer>
  )
}

export default Search
