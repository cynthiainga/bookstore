import React from 'react';
import Books from './Books';
import Form from './Form';

const BookstoreContainer = () => (
  <main className="main-container">
    <div className="Line" />
    <Books />
    <div className="Line-3" />
    <Form />
  </main>
);

export default BookstoreContainer;
