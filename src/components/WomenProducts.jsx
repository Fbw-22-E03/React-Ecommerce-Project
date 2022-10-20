import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../functions/Context";
import { fetchContext } from "../functions/fetchContext";

function Product() {
  // const [state, setState] = useState();

  const [loading, setLoading] = useState(false);

  const [state2, setState2] = useState();

  const { state, dispatch } = useContext(fetchContext);
  const { userState, dispatchUserState } = useContext(dataContext);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f0795b8e80mshc05e0a4abcdbd82p1b100ajsn97cb4c242de9",
      "X-RapidAPI-Host": "zappos1.p.rapidapi.com",
    },
    body: '[{"facetField":"zc1","values":["Clothing"]},{"facetField":"zc2","values":["Swimwear","Underwear & Intimates"]},{"facetField":"txAttrFacet_Gender","values":["Women","Girls"]}]',
  };
  useEffect(
    () => async () => {
      setLoading(true);
      const res = await fetch(
        "https://zappos1.p.rapidapi.com/products/list?page=1&limit=100&sort=relevance%2Fdesc",
        options
      );
      const data = await res.json();
      dispatch({ type: "FETCH_PRODUCTS_WOMAN", payload: data.results });
      setLoading(false);
    },
    []
  );

  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f0795b8e80mshc05e0a4abcdbd82p1b100ajsn97cb4c242de9",
      "X-RapidAPI-Host": "zappos1.p.rapidapi.com",
    },
  };

  
   useEffect(
      () => async () => {
        setLoading(true);
        const res = await fetch(`https://zappos1.p.rapidapi.com/products/detail?productId=9143855`,
          options2
        );
        const data = await res.json();
        setState2(data)
        setLoading(false);
      },
      []
    );
   

  async function request(id) {
    const res = await fetch(
      `https://zappos1.p.rapidapi.com/products/detail?productId=${id}`,
      options
    )
      const data = await res.json();
      return data;
  }

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
      <div>
        {console.log(state2, 'state 2')}
        {state.productsWoman.map((ele, index) => (
          <div key={index} className="card product_card">
            <div className="product_title">
              <h4> {ele.brandName} </h4>
              <div>
                <i className="bi bi-heart" style={{ fontSize: "2rem" }}></i>
              </div>
            </div>
            <div className="product_img">
              <img
                className="card-img-top"
                src={()=>{true && request(ele.productId).baseUrl+request(ele.productId).product.defaultImageUrl}}
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
                <h6 className="card-title">Price: {ele.price}</h6>
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
    </div>
  );
}

export default Product;
