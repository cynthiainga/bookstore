import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import BookstoreContainer from './components/BookstoreContainer';
import Header from './components/Header';
import CategoriesRoute from './components/categoriesRoute';
import { getBooks } from './redux/books/books';

store.dispatch(getBooks());

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<BookstoreContainer />} />
        <Route path="/categories" element={<CategoriesRoute />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
