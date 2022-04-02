import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [progress, setProgress] = useState(0);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    if (bookTitle && bookAuthor && bookCategory) {
      if (progress > 100) return progress;
      const newBook = {
        item_id: uuidv4(),
        title: bookTitle,
        category: bookCategory,
        author: bookAuthor,
        completed: progress,
        currentChapter: 16,
        currentChapterTitle: '',
      };
      setProgress((progress + Math.floor(Math.random() * 100)));
      dispatch(addBook(newBook));
      setBookTitle('');
      setBookCategory('');
      setBookAuthor('');
    }
    return progress;
  };

  const handleBookTitle = (e) => setBookTitle(e.target.value);

  const handleBookCategory = (e) => setBookCategory(e.target.value);

  const handleBookAuthor = (e) => setBookAuthor(e.target.value);

  return (
    <section className="form-section">
      <h2>ADD NEW BOOK</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={bookTitle}
          onChange={handleBookTitle}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value={bookAuthor}
          onChange={handleBookAuthor}
          required
        />
        <select
          name="category"
          className="form-select"
          value={bookCategory}
          onChange={handleBookCategory}
          required
        >
          <option className="gray-color" value="action" defaultValue hidden>
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Economy">Economy</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="History">History</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>
          {' '}
          Add Book
        </button>
      </form>
    </section>
  );
};

export default Form;
