import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = (props) => {
  return (
    <Jumbotron>
      <h1 className="header">{props.title}</h1>

      <ButtonToolbar className="custom-btn-toolbar">
        <LinkContainer to="/">
          <Button>Articles</Button>
        </LinkContainer>
        <LinkContainer to="/products">
          <Button>Products</Button>
        </LinkContainer>
        <LinkContainer to="/bucket">
          <Button>Bucket</Button>
        </LinkContainer>
      </ButtonToolbar>

    </Jumbotron>
  );
};

export default Header;
