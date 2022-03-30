import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const styling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    height: '100px',
  };
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <main style={styling}>
      <button type="button" onClick={handleClick}>Check Status</button>
      <h1>
        <br />
        <br />
        <br />
        {categories}
      </h1>
    </main>
  );
};

export default Categories;
