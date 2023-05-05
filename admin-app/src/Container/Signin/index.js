import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from "../../UI/Input";
function Signin() {
  return (
    <Container>
      <Row style = {{marginTop:50}}>
        <Col md={{span:6, offset:3}}>
        <Form>
        <Input label = "Email" placeholder = "Enter E-mail" value = "" type = "email" onChange = {() => { }}/>

        <Input label = "Password" placeholder = "Password" value = "" type = "password" onChange = {() => { }}/>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
      </Row>
    
    </Container>
  )
}

export default Signin
