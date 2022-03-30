const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (booksload) => ({
  type: ADD_BOOK,
  booksload,
});

export const removeBook = (booksload) => ({
  type: REMOVE_BOOK,
  booksload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.booksload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.booksload);

    default:
      return state;
  }
};

export default booksReducer;
