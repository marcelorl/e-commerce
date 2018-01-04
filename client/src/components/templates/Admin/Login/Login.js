import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const submitOnClick = history => history.push('/admin/product');

const Login = ({ history }) => (
  <Container>
    <Form>
      <h1 className="display-4">Login</h1>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          defaultValue="admin"
          placeholder="John DOe"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" defaultValue="123" id="password" />
      </FormGroup>
      <Button color="success" onClick={() => submitOnClick(history)}>
        Submit
      </Button>
    </Form>
  </Container>
);

export default Login;
