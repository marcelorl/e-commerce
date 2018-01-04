import React from 'react';
import { Button, Container, Table } from 'reactstrap';
import formatCurrency from 'format-currency';

const addNewProductOnClick = history => history.push('/admin/product/save');

const ProductList = ({ history, product: { list } }) =>
  <Container>
    <h1 className='display-4'>Product List</h1>
    <div className='clearfix'>
      <Button className='float-right' color='primary' onClick={() => addNewProductOnClick(history)}>
        Add New Product
      </Button>
    </div>
    <br />
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {list.map((product, key) =>
          <tr key={key}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>R$ {formatCurrency(product.price)}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </Container>;

export default ProductList;
