const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (playload) => ({
  type: ADD_BOOK,
  playload,
});

export const removeBook = (playload) => ({
  type: REMOVE_BOOK,
  playload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.playload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.playload);

    default:
      return state;
  }
};

export default reducer;
