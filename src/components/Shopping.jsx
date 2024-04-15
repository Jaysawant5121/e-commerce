import React from 'react';
import list from '../data';
import '../styles/Shopping.css';
import Card from './Card';

const Shopping = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Shopping;
