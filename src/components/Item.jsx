import React from "react";

const style = {
  display: "flex",
  justifyContent: "space-between",
  border: "3px solid red",
  marginBottom: "10px",
  padding: "10px"
};

export default function Item({ item, remove }) {
  console.log(`${item.label} has been rendered`);

  return (
    <div style={style}>
      <div>{item.label}</div>
      <button onClick={() => remove(item.id)}>Delete</button>
    </div>
  );
}
