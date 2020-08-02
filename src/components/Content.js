import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Content = (props) => {
  return (
    <Row>
      <Col>{props.children}</Col>
    </Row>
  );
};

export default Content;
