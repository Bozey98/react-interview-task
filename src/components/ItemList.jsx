import React, { useState } from "react";
import Item from "./Item";

const initItemsState = [
  {
    id: "9c20df",
    label: "Item 1"
  },
  {
    id: "9e7f21",
    label: "Item 2"
  },
  {
    id: "9ffc24",
    label: "Item 3"
  },
  {
    id: "74e5f2",
    label: "Item 4"
  }
];

export default function ItemList() {
  const [items, setItems] = useState(initItemsState);

  const remove = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} remove={remove} />
      ))}
    </div>
  );
}
