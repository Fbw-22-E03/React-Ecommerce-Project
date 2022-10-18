import React, { createContext, useReducer } from "react";

export const fetchContext = createContext();

const initialValue = {
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { products: action.payload };
    default:
      return state;
  }
}

function FetchContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <fetchContext.Provider value={{ state, dispatch }}>
      {children}
    </fetchContext.Provider>
  );
}

export default FetchContext;
