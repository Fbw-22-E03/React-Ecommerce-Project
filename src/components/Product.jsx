import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../functions/Context";
import { fetchContext } from "../functions/fetchContext";

function Product() {
  // const [state, setState] = useState();

  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(fetchContext);
  const { userState, dispatchUserState } = useContext(dataContext);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "da81b807a3msh6630664edd85f8cp16fe6bjsnf0cc3c8311bf",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  useEffect(
    () => async () => {
      setLoading(true);
      const res = await fetch(
        "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
        options
      );
      const data = await res.json();
      dispatch({ type: "FETCH_PRODUCTS", payload: data.results });
      setLoading(false);
    },
    []
  );

  function AddToCart(name, image, price, count) {
    dispatchUserState({
      type: "ADD_TO_CART",
      payload: { name, image, price, count },
    });
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="products_container">
      {state.products.map((ele, index) => (
        <div key={index} className="card product_card">
          <div className="product_title">
            <h4> {ele.name} </h4>
            <div>
              <i className="bi bi-heart" style={{ fontSize: "2rem" }}></i>
            </div>
          </div>
          <div className="product_img">
            <img
              className="card-img-top"
              src={ele.images[0].url}
              alt="Card image cap"
            />
          </div>

          <div className="card-body product_card_body">
            <div>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="product_card_body_price">
              <h6 className="card-title">Price: {ele.price.value} Euro</h6>
              <a href="#" className="">
                <button
                  onClick={() =>
                    AddToCart(
                      ele.name,
                      ele.images[0],
                      ele.price.value,
                      (ele.count = 1)
                    )
                  }
                  className="product_card_body_button"
                >
                  <i className="bi bi-basket"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
