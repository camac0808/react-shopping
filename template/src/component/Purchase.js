// import data from "../db/items.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { counterActions } from '../context/counterSlice';

export default function Purchase() {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  const [item, setItem] = useState([]);



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

  // async await 함수는 프로미스 객체를 반환 하므로 부수효과 함수가 될 수 없다
  useEffect(() => {
    // json-server로 더미db 연결해서 간단한 api만듬
    async function getItem() {
      try {
        const response = await fetch(`http://localhost:3001/items/${id}`);
        const data = await response.json();
        setItem(data);
        setPrice(data.price);
        setTotalPrice(data.price);
      } catch (error) {
        console.log(error);
      }
    }
    getItem();
  }, [id]);

  function plusClick() {
    setCount(count + 1);
    setTotalPrice(price * (count + 1));
  }

  function minusClick() {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(price * (count - 1));
    }
  }

  function cartClick() {
    if (window.confirm("Are you sure you want to cart this item?")) {
      fetch(`http://localhost:3001/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...item,
          cart: true,
        }),
      }).then((response) => {
        if (response.ok) {
          cartBadgeCount();
          window.alert("You have successfully added this item to your cart.");
        }
      });
    }
  }

  console.log(count, price, totalPrice);
  return (
    <div>
      <div className="purchase-container">
        <div className="purchase-image-container">
          {/* 이미지 절대 경로 ! process.env.PUBLIC_URL 넣어줘야 로드된다... */}
          <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name}></img>
        </div>
        <div className="purchase-info-container">
          <table className="table caption-top">
            <caption>구매창</caption>
            <tbody>
              <tr>
                <th>상품 이름</th>
                <td>{item.name}</td>
              </tr>
              <tr>
                <th>상품 가격</th>
                <td>{item.price}</td>
              </tr>
              <tr>
                <th>구매 수량</th>
                <td className="counter">
                  <span className="minus" onClick={minusClick}>
                    -
                  </span>
                  <div className="count">{count}</div>
                  <span className="plus" onClick={plusClick}>
                    +
                  </span>
                </td>
              </tr>
              <tr>
                <th>결제 금액</th>
                <td>{totalPrice}원</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-secondary" onClick={cartClick}>
            장바구니 담기
          </button>
          <button className="btn btn-primary">구매하기</button>
        </div>
      </div>
    </div>
  );
}

// useEffect(() => {
//   // dummy 사용시
//   // const filterData = data.items.filter((item) => {
//   //   return item.id === Number(id);
//   // });
//   // setItem(filterData[0])
// }, [item]);
