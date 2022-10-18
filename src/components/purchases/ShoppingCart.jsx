import React, { useState, useContext } from "react";
import { dataContext } from "../../functions/Context";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import CartCardComponent from "./CartCardComponent";

function ShoppingCart() {
  const { userState, dispatchUserState } = useContext(dataContext);
  // Empty Cart Message
  // if (isEmpty) return <h5 className="empty-message">My Cart is Empty.</h5>;

  // const totalPrice = userState.cart.reduce(
  //   (prev, next) => prev.count * prev.price + next.count * next.price,
  //   0
  // );

  const summedUp = useState.cart.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );
  console.log(summedUp);

  return (
    // Main Container
    <Container fluid className="shopping-cart-main-container">
      <h1 className="shopping-cart-header">Shopping Cart:</h1>
      <Row>
        <Col>
          <div className="div-flex-center">
            <p className="cart-amount">
              Cart<span className="badge">0</span>
            </p>
            <p className="remove-all">Remove All</p>
          </div>
          <div className="cart-items">
            <CartCardComponent />
          </div>
          <div>Total Price: {userState.cart.length > 0 ? summedUp : 0}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;
