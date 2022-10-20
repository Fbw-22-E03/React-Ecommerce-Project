import React, { createContext, useReducer } from "react";

export const fetchContext = createContext();

const initialValue = {
  productsMan: [],
  searchState: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_MAN":
      return { ...state, productsMan: action.payload };
    case "SET_SEARCH_STATE":
        return { ...state, searchState: action.payload};
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
