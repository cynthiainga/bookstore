import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (bookTitle && bookCategory) {
      const newBook = {
        id: new Date().getTime().toString(),
        title: bookTitle,
        author: 'Robert Harris',
        completed: 57,
        currentChapter: 18,
        currentChapterTitle: 'The German Reich',
      };
      dispatch(addBook(newBook));
      setBookTitle('');
      setBookCategory('');
    }
  };

  const handleBookTitle = (e) => setBookTitle(e.target.value);
  const handleBookCategory = (e) => setBookCategory(e.target.value);

  return (
    <section className="form-section">
      <h2>Add New Book</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleBookTitle}
          required
        />
        <select
          name="category"
          className="form-select"
          value={bookCategory}
          onChange={handleBookCategory}
          required
        >
          <option className="gr-clr" disabled value="">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </section>
  );
};

export default Form;
