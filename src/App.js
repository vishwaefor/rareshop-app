import React from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Content from './components/Content';
import ArticleView from './containers/articles-view/ArticlesView';
import ProductView from './containers/product-view/ProductView';
import PriceBucket from './containers/price-bucket/PriceBucket';
import ArticlesReducer from './store/reducers/articles';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({articles: ArticlesReducer})

const store = createStore(rootReducer);

const app = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container className="p-3">
          <Header title="Welcome to Rare Shop"></Header>
          <Content>
            <Switch>
              <Route path="/bucket">
                <PriceBucket />
              </Route>
              <Route path="/products">
                <ProductView />
              </Route>
              <Route path="/">
                <ArticleView />
              </Route>
            </Switch>
          </Content>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default app;
