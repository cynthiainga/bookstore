import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import BookstoreContainer from './components/BookstoreContainer';
import Categories from './components/categoriesRoute';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<BookstoreContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
