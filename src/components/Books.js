import React from 'react';
import booksList from '../data/bookData';
import Book from './Book';

const Books = () => (
  <section>
    {booksList.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </section>
);

export default Books;
