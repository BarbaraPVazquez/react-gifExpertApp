import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  /* const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]); */

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <h3 className="card animate__animated animate__flash">Geladen...</h3>}

      {<div className="card-grid">

        {/* <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>
      </button> */}
        {
          images.map(img =>
          (<GifGridItem
            key={img.id}
            {...img}
          />)
          )}

      </div>}
    </>)

};
