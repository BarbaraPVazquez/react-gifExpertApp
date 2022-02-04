import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setINputValue] = useState('');

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setINputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Submit')
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats,]);
      setINputValue('');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />

      </form>

    </>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

