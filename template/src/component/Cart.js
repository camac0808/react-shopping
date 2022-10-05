import { useState } from "react";

export default function Cart({ name, price, image, detail, id, item}) {
  const [itemId, setItemId] = useState(id);

  // 장바구니 X 클릭할 경우
  function removeCart() {
    if (window.confirm("Are you sure you want to remove this item?")) {
      fetch(`http://localhost:3001/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...item,
          cart: false,
        }),
      }).then((response) => {
        if (response.ok) {
          setItemId(0);
        }
      });
    }
  }
  if (itemId === 0) {
    return null;
  }

  return (
    <div className="cart-container">
      <h1>장바구니</h1>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <img src={image} alt={name}></img>
      <h2>{detail}</h2>
      <h2>{id}</h2>
      <div className="cart-x-icon">
        <i className="bi bi-x" onClick={removeCart}></i>
      </div>
    </div>
  );
}
