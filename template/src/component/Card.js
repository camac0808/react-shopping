import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ item: i, name, price, image, id, showSoldOutBtn, soldOut }) {
  const navigate = useNavigate();
  // 받아온 item을 변수 i 구조분해 할당해서 useState로 다시 저장
  const [item, setItem] = useState(i);
  const [hover, setHover] = useState(false);
  const [sold, setSold] = useState(soldOut);

  // PUT 아이템(품절) 수정하기
  function toggleSoldOut() {
    // setSold((current) => !current);
    fetch(`http://localhost:3001/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
        soldOut: !sold,
      }),
    }).then((response) => {
      if (response.ok) {
        setSold(!sold);
      }
    });
  }

  // DELETE 아이템 삭제하기
  function deleteItem() {
    // DELETE는 메소드만 써주면 된다
    fetch(`http://localhost:3001/items/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        // 이부분은 책 참고해서 다른 방법도 찾아봐야될듯
        setItem({ id: 0 });
      }
    });
  }

  // delete 버튼 누르면 null 반환
  if (item.id === 0) {
    // 원래는 card를 return하는데 id가 0이면 아예 return을 null로 만들어버려서 없애버린다
    return null;
  }

  // 장바구니 클릭
  function cartClick() {
    // setSold((current) => !current);
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
        const confirm = window.confirm(
          "You have successfully added this item to your cart. Do you want to the cart?"
        );
        if (confirm === true) {
          navigate(`/cartpage`);
        }
      }
    });
  }

  return (
    <div className="card">
      {/* 마우스 hover 이벤트 추가 */}
      <div
        className="card-image-container"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {/* public폴더에 img폴더를 넣으면 경로를 간단하게 img/로 시작할 수 있다 */}
        {sold ? (
          <div>
            <img className="soldout-image" src="img/soldout.png" alt={name}></img>
            <img src={image} alt={name} style={{ opacity: 0.3 }}></img>
          </div>
        ) : image ? (
          <img className={hover ? "hover" : ""} src={`${image}`} alt={name}></img>
        ) : (
          // image가 없으면 noimage로 대체
          <img src="img/noimage.png" alt={name}></img>
        )}

        {/* 상세페이지 클릭 */}
        <Link to={`/card/${id}`}>
          {sold ? null : hover ? <button className="more-detail">More Detail</button> : null}
        </Link>
      </div>

      <div className={`card-info ${sold ? "off" : ""}`}>
        {/* 카드 이름 가격 */}
        <div className={sold ? "card-tag off" : "card-tag"}>
          <div className="card-name">{name}</div>
          <div className="card-price">{price}$</div>
        </div>

        {/* 삭제 아이콘 */}
        <div className="x-icon">
          <i className="bi bi-x" onClick={deleteItem}></i>
        </div>

        {/* soldout 버튼 누르면 checkbox 나타남 */}
        {showSoldOutBtn ? (
          <div>
            <input
              type="checkbox"
              id={id}
              name="soldCheck"
              checked={sold}
              onChange={toggleSoldOut}
            />
            {/* htmlFor에 id나 name을 적어서 해당 input과 연결한다 => label을 클릭해도 이벤트가 발생한다*/}
            <label htmlFor={id} style={{ marginLeft: "5px" }}>
              Sold Out
            </label>
          </div>
        ) : null}

        {/* buy button과 장바구니 button */}
        <div className="card-button-container">
          <Link to={`/purchase/${id}`}>
            <button disabled={sold}>BUY</button>
          </Link>
          <button disabled={sold} onClick={cartClick}>
            <i className="bi bi-bag" style={{ fontSize: "1.2rem" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
