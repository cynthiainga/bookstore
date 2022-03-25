import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookstoreContainer from './components/BookstoreContainer';
import Categories from './redux/categories/categories';

const App = () => (
    <div className="app">
        <Header />
        <Routes>
            <Route path="/" element={<BookstoreContainer />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
    </div>
);

export default App;
