import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid.js';

export const GiffExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One Punch']);

  /* const handleAdd = () => {
    const newCategory = ['HunterXHunter', 'Death Note'];
    setCategories([...categories, ...newCategory]);
}; */

  return (
    <>
      <h2>GiffExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}

