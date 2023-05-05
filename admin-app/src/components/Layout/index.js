import React from 'react'
import { Container } from 'react-bootstrap'


export default function Layout(props) {
  return (
    <>
      
      <Container style = {{marginTop:100}}>
        {props.children}
      </Container>
    </>
  )
}
