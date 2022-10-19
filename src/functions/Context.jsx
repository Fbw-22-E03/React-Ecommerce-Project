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
  isLoading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT_USER":
      return { ...state, users: [action.payload] };
      case "CHANGE_PASSWORD":
        return { ...state, users:state.users.map((ele) => {
          if (ele.password === action.payload.oldPassword ) return { ...ele, password: action.payload.newPassword, passwordTwo: action.payload.newPassword };
          else return ele;
        }), };
    case "IS_LOGIN":
      return {
        ...state,
        users: state.users.map((ele) => {
          if (ele.email === action.payload.email)
            return { ...ele, isLogin: true };
          else return ele;
        }),
      };
    case "IS_LOADING":
      return { ...state, isLoading: false };
    case "IS_LOGOUT":
      return {
        ...state,
        users: state.users.map((ele) => {
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
      case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => action.payload !== product)
      }
      case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cart: [] };
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
