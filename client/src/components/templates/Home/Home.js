import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import ProductItem from '../../molecules/ProductItem';
import Slider from '../../molecules/Slider';

const Home = ({ product: { list } }) => (
  <Container fluid className="mb-4">
    <Row>
      <Col>
        <Slider key="slider" />
      </Col>
    </Row>
    <Row className="mt-3">
      {list.map((product, key) => (
        <Col key={key} lg="3">
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  </Container>
);

Home.propTypes = {
  product: PropTypes.shape({
    list: PropTypes.array.isRequired
  }).isRequired
};

export default Home;
