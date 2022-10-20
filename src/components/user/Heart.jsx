import React, { useRef } from "react";

function Heart(props) {
  const heartIconRef = useRef();

  function handleColorChange() {
    if (heartIconRef.current.classList[2] === "icon_heart_color") {
      heartIconRef.current.classList.remove("icon_heart_color");
    } else {
      heartIconRef.current.classList.add("icon_heart_color");
    }
  }
  return (
    <button onClick={handleColorChange} className="product_button_heart">
      <i
        ref={heartIconRef}
        className="bi bi-heart"
        style={{ fontSize: "2rem" }}
      ></i>
    </button>
  );
}

export default Heart;
