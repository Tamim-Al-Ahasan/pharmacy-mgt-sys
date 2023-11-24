

import React from 'react';

const ItemTable = () => {
  const items = [
    { id: 1, name: 'Drug 1' },
    { id: 2, name: 'Drug 2' },
    { id: 3, name: 'Drug 3' },
  ];

  return (
    <>
    <h1>This in inventory</h1>
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
    </>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default ItemTable