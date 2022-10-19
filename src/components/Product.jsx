import React, { useContext, useEffect, useRef, useState } from "react";
import { dataContext } from "../functions/Context";
import { fetchContext } from "../functions/fetchContext";
import Heart from "./user/Heart";

function Product() {
  //const [state, setState] = useState();

   const { state, dispatch } = useContext(fetchContext);
   const { userState, dispatchUserState } = useContext(dataContext);


  // // const [loading, setLoading] = useState(false);

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'f598709df1msh814c5a1fb3c3a89p1e8989jsne8da2617eff4',
  //     'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  //   }
  // };

  // useEffect(
  //   () => async () => {
  //     setLoading(true);
  //     const res = await fetch(
  //       "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
  //       options
  //     );
  //     const data = await res.json();
  //     dispatch({ type: "FETCH_PRODUCTS_MAN", payload: data.results });
  //     setLoading(false);
  //   },
  //   []
  // );

 

  function AddToCart(name, image, price, count) {
    dispatchUserState({
      type: "ADD_TO_CART",
      payload: { name, image, price, count },
    });
  }

  return (
    <div>
      <h2 style={{ margin: "25px 0" }}>A S K collection 2022:</h2>

      <div className="products_container">
        {userState.isLoading ? (
          <div className="spinner-border m-5" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          state.productsMan.filter(ele=>{
            if(state.searchState === "" ) {
              return ele
            } 
            else {
              return ele.name.toLowerCase().includes(state.searchState.toLowerCase())
            }
          }
            ).map((ele, index) => (
            <div key={index} className="card product_card">
              <div className="product_title">
                <h4 className="product_h4"> {ele.name} </h4>
                <div>
                  {/* <button onClick={handleColorChange} className="product_button_heart"> */}
                       <Heart/>
                  {/* </button> */}
               
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="product_card_body_price">
                  <h6 className="card-title">PRICE: {ele.price.value} €</h6>
               
                    <button
                      className="product_card_btn btn btn-outline-light"
                      onClick={() =>
                        AddToCart(
                          ele.name,
                          ele.images[0],
                          ele.price.value,
                          (ele.count = 1)
                        )
                      }
                    >
                      <i className="bi bi-basket"></i>
                    </button>
               
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Product;
