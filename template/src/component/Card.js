import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ name, price, image, id, showSoldOutBtn, soldOut }) {
  const [hover, setHover] = useState(false);
  const [sold, setSold] = useState(soldOut);

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
          <img src="img/soldout.png" alt={name}></img>
        ) : (
          <img className={hover ? "hover" : ""} src={`${image}`} alt={name}></img>
        )}

        {/* 상세페이지 클릭 */}
        <Link to={`/card/${id}`}>
          {hover ? <button className="more-detail">More Detail</button> : null}
        </Link>
      </div>

      <div className={`card-info ${sold ? "off" : ""}`} >
        {/* 카드 이름 가격 */}
        <div className={sold ? "card-tag off" : "card-tag"}>
          <div className="card-name">{name}</div>
          <div className="card-price">{price}$</div>
        </div>
  
        {/* x 아이콘 */}
        <div className="x-icon">
          <i className="bi bi-x"></i>
        </div>
  
        {/* soldout 버튼 누르면 checkbox 나타남 */}
        {showSoldOutBtn ? (
          <div>
            <input
              type="checkbox"
              id={id}
              name="soldCheck"
              checked={sold}
              onChange={() => setSold((current) => !current)}
            />
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
          <Link to={`/cart`}>
            <button disabled={sold}>
              <i className="bi bi-bag" style={{ fontSize: "1.2rem" }}></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
