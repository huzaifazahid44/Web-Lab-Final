import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmojis } from './features/EmojisSlice';


const Categories = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.emojis);

  useEffect(() => {
    // Dispatch the fetchEmojis action when the component mounts
    dispatch(fetchEmojis());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  

  return (
    <div>
        <h1>Categories</h1>
      <h2>smileys-and-people</h2>
      <ul>
        {data.map((emoji) => (
          <li key={emoji.id}>{emoji.name}</li>
          // Replace emoji.name with the property you want to display
        ))}
      </ul>
    </div>




  );
};

export default Categories;
