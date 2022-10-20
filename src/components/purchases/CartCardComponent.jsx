import React, { useContext, useReducer } from "react";
import { Button, Card } from "react-bootstrap";
import { dataContext } from "../../functions/Context";

function CartCardComponent() {
  const { userState, dispatchUserState } = useContext(dataContext);

  if (userState.cart.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="product_contain cart-items">
        {userState.cart.map((ele) => (
          <div key={ele.name} className="card mb-3 rounded-0">
            <div className="row g-0 rounded-0">
              <div className="col-md-5 rounded-0">
                <img
                  src={ele.image.url}
                  className="img-thumbnail rounded-0"
                  alt="..."
                ></img>
              </div>
              <div className="col-md-5 rounded-0">
                <div className="card-body">
                  <h2 className="card-title">{ele.name}</h2>
                  <p
                    className="card-text"
                    style={{ fontSize: "1.2rem", marginBottom: "2rem" }}
                  >
                    Description of Product. Taken from API
                  </p>
                  <p style={{ fontSize: "1.2rem", marginBottom: ".5rem" }}>
                    Quantity: {ele.count}
                  </p>
                  <div
                    className="card_buttons"
                    style={{ fontSize: "1.2rem", marginBottom: ".5rem" }}
                  >
                    <button
                      type="button"
                      className="btn btn-plus btn-outline-secondary rounded-0"
                      onClick={() =>
                        dispatchUserState({ type: "ADD_TO_CART", payload: ele })
                      }
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-plus btn-outline-secondary rounded-0"
                      onClick={() =>
                        dispatchUserState({
                          type: "REMOVE_FROM_CART",
                          payload: ele
                        })
                      }
                    >
                      -
                    </button>
                  </div>
                  <p>Price: {(ele.price * ele.count).toFixed(2)} €</p>{" "}
                  <hr/>
                  <button
                  onClick={()=>dispatchUserState({type: "REMOVE_ITEM_FROM_CART", payload: ele})}
                  style={{ fontSize: "1rem", marginTop: "0rem" }} 
                  type="button" className="btn btn-outline-secondary rounded-0">
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CartCardComponent;
