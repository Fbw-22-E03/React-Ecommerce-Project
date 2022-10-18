import React, { createContext, useReducer } from "react";

export const dataContext = createContext();

const initialValue = {
  users: [
    {
      email: "info@info.com",
      password: "password1234",
      passwordTwo: "password1234",
      accept: false,
      newsletter: false,
      isLogin: false,
    },
  ],
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT_USER":
      return { ...state, users: [action.payload] };
    case "IS_LOGIN":
      return {
        ...state,
        users: state.users.map((ele) => {
          if (ele.email === action.payload.email)
            return { ...ele, isLogin: true };
          else return ele;
        }),
      };
    case "IS_LOGOUT":
      return {
        ...state,
        users: state.users.map((ele) => {
          console.log(ele.isLogin, "we are map");
          if (ele.isLogin) return { ...ele, isLogin: false };
          else return ele;
        }),
      };
    case "ADD_TO_CART":
      if (
        state.cart.filter((ele) => ele.name === action.payload.name).length < 1
      ) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        return {
          ...state,
          cart: state.cart.map((ele) => {
            if (ele.name === action.payload.name)
              return { ...ele, count: ele.count + 1 };
            else return ele;
          }),
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.map((ele) => {
          if (ele.name === action.payload.name)
            return {
              ...ele,
              count: ele.count === 0 ? ele.count : ele.count - 1,
            };
          else return ele;
        }),
      };
    default:
      return state;
  }
}

function Context({ children }) {
  const [userState, dispatchUserState] = useReducer(reducer, initialValue);

  return (
    <dataContext.Provider value={{ userState, dispatchUserState }}>
      {children}
    </dataContext.Provider>
  );
}

export default Context;
