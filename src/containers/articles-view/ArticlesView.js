import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import ArticleCard from '../../components/ArticleCard';
import { useSelector } from 'react-redux';

const ArticleView = (props) => {
  const articles = useSelector((state) => state.articles.articles);

  return (
    <React.Fragment>
      <CardDeck>
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default ArticleView;
