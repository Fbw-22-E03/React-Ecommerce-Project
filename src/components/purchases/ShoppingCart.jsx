import React, { useState, useContext, useRef } from "react";
import { dataContext } from "../../functions/Context";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import CartCardComponent from "./CartCardComponent";

function ShoppingCart() {
  // Empty Cart Message
  // if (isEmpty) return <h5 className="empty-message">My Cart is Empty.</h5>;

  // const totalPrice = cartCardComponent.reduce(
  //   (totalPrice, item) => totalPrice + item.price,
  //   0
  // );

  const { userState, dispatchUserState } = useContext(dataContext);

  const basketRef = React.useRef();

 function removeFromBasket() {
  dispatchUserState({type: "REMOVE_ALL_FROM_CART"})
 }

  return (
    // Main Container
    <Container fluid className="shopping-cart-main-container">
      <Row>
         <h1 className="shopping-cart-header">SHOPPING CART:</h1>
      </Row>
      <Row>
        <Col>
          <div className="div-flex-center">
            <p className="cart-amount">
             Products in shopping cart: <span
                ref={basketRef}
                className={
                  userState.cart.length !== 0
                    ? "products_products_in_basket "
                    : ""
                }
              >
                {'  '}{userState.cart.length === 0 ? null : userState.cart.length}
              </span>
            </p>
            <button onClick={removeFromBasket} className="btn btn-outline-dark remove-all rounded-0" >Remove All</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <CartCardComponent />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="shopping_total_price">
            Total Price:{" "} 
            <strong>
              {userState.cart.length === 0
                ? "0"
                : userState.cart
                    .map((ele) => ele.price * ele.count)
                    .reduce((prev, curr) => prev + curr, 0).toFixed(2)}
            €</strong> 
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;
