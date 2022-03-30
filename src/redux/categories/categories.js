const CATEGORIES = 'bookstore/categories/CATEGORIES';

const initialState = [];

export const categoriesStatus = (booksload) => ({
  type: CATEGORIES,
  booksload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoriesReducer;
