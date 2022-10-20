import React, { useState } from "react";

// state holding search query
const [items, setSearchedItems] = useState([]);

// update state with search query
const handleChange = (event) => {
  event.preventDefault();
  setSearchedItems(event.target.value);
};

// filter searched items
export const filterItems = items.filter((item) => {
  return item.title.toLowerCase().includes(item);
});

// search button onClick render filtered items
