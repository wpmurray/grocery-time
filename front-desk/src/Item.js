/*import React from "react";
import "./Item.css";

const Item = ({ id, items, list, setList, complete }) => {
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="item">
      <p className={complete ? "complete" : ""}>{items}</p>
      <img
        onClick={() => handleComplete(id)}
        src="https://img.icons8.com/offices/40/000000/checked-2--v2.png"
        alt="complete task"
      />
      <img
        onClick={() => remove(id)}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="Delete"
      />
    </div>
  );
};
export default Item;
*/

import React from 'react'

export default function Item({ item, toggleItem }) {
    function handleItemClick(){
        toggleItem(item.id)
    }

  return (
    <div>
        <label>
            <input type="checkbox" checked={item.complete} onChange={handleItemClick}/>
            {item.name}
        </label>
    </div>
  )
}
