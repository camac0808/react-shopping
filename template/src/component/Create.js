import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  // 버튼 누를때 새로고침 현상 제거
  function onSubmit(e) {
    e.preventDefault();
    // console.log(nameRef.current.value)
  }

  // item.json에 새로 추가할 아이템
  const [item, setItem] = useState({
    name: "",
    price: "",
    detail: "",
    soldOut: false,
    cart: false,
    image: "",
  });

  // useRef를 쓰지 않는 e.target.value 방법
  // input의 입력값 받아서 setItem으로 저장
  function handleChange(e) {
    const { name, value } = e.target;
    setItem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }

  // useRef를 쓰는 방법
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const detailRef = useRef(null);
  console.log(nameRef.current);

  // POST 아이템 추가하기
  function addItem() {
    fetch(`https://my-json-server.typicode.com/camac0808/react-shopping/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
      // body: JSON.stringify({
      //   name: nameRef.current.value,
      //   price: priceRef.current.value,
      //   detail: detailRef.current.value,
      //   soldOut: false,
      //   cart: false,
      //   image: "",
      // }),
    }).then((response) => {
      if (response.ok) {
        alert("생성이 완료 되었습니다");
        // 생성이 완료되면 (조건 충족시) 홈페이지로 이동 => useNavigate // (클릭시 이동) => Link
        // 뒤로가기 -1 앞으로가기 1
        navigate(`/`);
      }
    });
  }

  return (
    <div className="detail">
      <form className="row g-3" onSubmit={onSubmit}>
        {/* name input */}
        <h3>상품 추가하기</h3>
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            value={item.name}
            type="text"
            name="name"
            onChange={handleChange}
            ref={nameRef}
          ></input>
        </div>

        {/* price input */}
        <div className="col-md-6">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            value={item.price}
            type="number"
            name="price"
            onChange={handleChange}
            ref={priceRef}
          ></input>
        </div>

        {/* detail input */}
        <div className="col-12">
          <label className="form-label">Detail</label>
          <input
            className="form-control"
            value={item.detail}
            type="text"
            name="detail"
            onChange={handleChange}
            ref={detailRef}
          ></input>
        </div>
        {/* add button */}
        <button className="btn btn-outline-primary" style={{ marginTop: "20px" }} onClick={addItem}>
          ADD
        </button>
      </form>
    </div>
  );
}

// "id": 1,
// "name": "running",
// "price": 100,
// "soldOut": false,
// "cart": false,
// "image": "img/신발1.jfif",
// "detail": "card 상세페이지 입니다"
