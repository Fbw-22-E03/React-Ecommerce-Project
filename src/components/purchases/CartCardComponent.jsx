import React, { useContext, useReducer } from "react";
import { Button, Card } from "react-bootstrap";
import { dataContext } from "../../functions/Context";

function CartCardComponent() {
  const { userState, dispatchUserState } = useContext(dataContext);

  if (userState.cart.length === 0) {
    return <div></div>;
  } else {
    return (
      <div>
        {userState.cart.map((ele) => (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={ele.image.url}
                  className="img-thumbnail rounded-2"
                  alt="..."
                ></img>
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">
                    Description of Product. Taken from API
                  </p>
                  <p>Quanity: {ele.count}</p>
                  <div className="card_buttons">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        dispatchUserState({ type: "ADD_TO_CART", payload: ele })
                      }
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        dispatchUserState({
                          type: "REMOVE_FROM_CART",
                          payload: ele,
                        })
                      }
                    >
                      -
                    </button>
                  </div>
                  <p>Price: {(ele.price * ele.count).toFixed(2)}</p>
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
