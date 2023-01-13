import React from 'react';
import ItemForm from './ItemForm';

const AddItem = () => {
  const handleOnSubmit = (item) => {
    console.log(item);
  };

  return (
    <React.Fragment>
      <ItemForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddItem;