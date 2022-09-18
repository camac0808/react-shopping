import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ name, price, image, id }) {
  const [moreDetailBtn, setMoreDetailBtn] = useState(false);

  return (
    <div className="card">
      <div
        className="card-image-container"
        onMouseOver={() => setMoreDetailBtn(true)}
        onMouseOut={() => setMoreDetailBtn(false)}
      >
        <img src={`${image}`} alt={name}></img>
        <Link to={`/card/${id}`}>
          {moreDetailBtn ? <button className="more-detail">More Detail</button> : null}
        </Link>
      </div>
      <div className="card-info">
        <div className="card-name">{name}</div>
        <div className="card-price">{price}$</div>
      </div>
      <div className="x-icon">
        <i className="bi bi-x"></i>
      </div>
      
      <div className="card-button-container">
        <Link to={`/purchase/${id}`}>
          <button>BUY</button>
        </Link>
        <button>
          <i className="bi bi-bag" style={{ fontSize: "1.2rem" }}></i>
        </button>
      </div>
    </div>
  );
}
