import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleClick = (e, bookId) => {
    e.preventDefault();
    dispatch(removeBook(bookId));
  };

  return (
    <div className="books-container">
      <div>
        <div className="book-category">{book.category}</div>
        <div className="book-title">
          <h3>{book.title}</h3>
        </div>
        <span className="book-author">{book.author}</span>
      </div>
      <div>
        <div className="book-complChart" />
        <div className="book-completed">
          {book.completed}
          %
        </div>
        <div className="book-complPref">completed</div>
      </div>
      <div>
        <div className="book-curChap">Current Chapter</div>
        <div className="book-curChap">
          Chapter
          {book.currentChapter}
          <span className="book-curChap-title">{book.currentChapterTitle}</span>
        </div>
      </div>
      <div className="remove-btn">
        <button type="button" onClick={(e) => handleClick(e, book.item_id)}>
          {' '}
          Remove
          {' '}
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object),
};

Book.defaultProps = {
  book: {},
};

export default Book;
