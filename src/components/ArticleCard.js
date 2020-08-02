import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ArticleCard = props=>{
    return <Card>
    <Card.Img variant="top" src={props.article.imageUrl} />
    <Card.Body>
      <Card.Title>{props.article.name}</Card.Title>
      <Card.Text>
        {props.article.description}
      </Card.Text>
      <Button variant="primary">View Products</Button>
    </Card.Body>
  </Card>
}

export default ArticleCard;


