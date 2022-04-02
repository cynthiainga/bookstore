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
      <div className="book-col-1">
        <div className="book-category">{book.category}</div>
        <div className="book-title">
          <span>{book.title}</span>
        </div>
        <span className="book-author">{book.author}</span>
        <div className="remove-btn-container book-btns flex-center-center">
          <span className="clickable">Comments</span>
          <div className="sm-line" />
          <button
            className="remove-btn clickable"
            type="button"
            onClick={(e) => handleClick(e, book.item_id)}
          >
            {' '}
            Remove
            {' '}
          </button>
          <div className="sm-line" />
          <span className="clickable">Edit</span>
        </div>
      </div>

      <div className="book-col-2 flex-center-center">
        <div className="oval-2" />
        <div className="completed-txt-parcent">
          <span className="completed-parcent">
            {book.completed}
            %
          </span>
          <div className="completed-text">completed</div>
        </div>
      </div>

      <div className="big-line" />

      <div className="book-col-3">
        <span className="current-chapter-text">CURRENT CHAPTER</span>
        <div className="current-lesson">
          Chapter
          {' '}
          {book.currentChapter}
          <span className="book-current-chapter-title">
            {book.currentChapterTitle}
          </span>
        </div>
        <button type="button" className="progr-btn clickable">
          UPDATE PROGRESS
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
