import { useState } from "react";
import { useDispatch } from 'react-redux';
import { counterActions } from '../context/counterSlice';

export default function Cart({ name, price, image, detail, id, item }) {
  const [itemId, setItemId] = useState(id);


  // redux cartbadgecount dispatch function
  const dispatch = useDispatch();

  // 장바구니 안에 있는 cart 개수를 세서 reducer action의 payload에 실어서 보내준다
  async function cartBadgeCount() {
    let count = 0;
    const response = await fetch("http://localhost:3001/items")
    const data = await response.json();
    data.forEach((item) => {
      if (item.cart === true) {
        count += 1;
      }
    });
    console.log(count);
    dispatch(counterActions.badgeCount(count));
  }

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
          cartBadgeCount();
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
