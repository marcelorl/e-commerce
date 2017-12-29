import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

class ProductSave extends Component {
  constructor () {
    super();
    this.state = {};

    this.onCancel = this.onCancel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onCancel () {
    this.props.history.push('/admin/product');
  }

  onChange (el) {
    this.setState({
      [el.target.name]: el.target.value
    });
  }

  onFileChange (el) {
    let files = el.target.files;

    if (files.length) {
      this.setState({
        [el.target.name]: files[0]
      });
    }
  }

  onSave () {
    const formData = new FormData();

    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('price', this.state.price);
    formData.append('factor', this.state.factor);
    formData.append('image', this.state.image);

    this.props.saveProduct(formData)
      .then(() =>
        this.props.history.push('/admin/product')
      );
  }

  render () {
    return (
      <Container>
        <h1 className='display-4'>Product Save</h1>
        <Form>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input type='text' name='name' id='name' onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for='description'>Description</Label>
            <Input type='textarea' name='description' id='description' onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for='price'>Price</Label>
            <Input type='number' name='price' id='price' onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for='factor'>Factor</Label>
            <Input type='select' name='factor' id='factor' onChange={this.onChange}>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='image'>Image</Label>
            <Input type='file' name='image' id='image' onChange={this.onFileChange} />
          </FormGroup>
          <div className='clearfix'>
            <Button className='float-left' color='secondary' onClick={this.onCancel}>
              Cancel
            </Button>
            <Button className='float-right' color='success' onClick={this.onSave}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default ProductSave;
