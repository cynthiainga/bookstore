import React from 'react';

const Form = () => (
  <section>
    <h2>Add New Book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <select>
        <option value="">Category</option>
        <option value="action">Action</option>
        <option value="science">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </section>
);

export default Form;
