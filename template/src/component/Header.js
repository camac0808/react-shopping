import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { counterActions } from '../context/counterSlice';


export default function Header() {
  // useSelector는 store의 state를 인자로 받아온다
  const badgeCount = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log(badgeCount);

  async function cartBadgeCount() {
    let count = 0;
    const response = await fetch("https://my-json-server.typicode.com/camac0808/react-shopping/items")
    const data = await response.json();
    data.forEach((item) => {
      if (item.cart === true) {
        count += 1;
      }
    });
    console.log(count);
    dispatch(counterActions.badgeCount(count));
  }
  cartBadgeCount();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around py-3 mb-4">
      <div className="title d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
        React Shopping
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav px-3">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cartpage" className="nav px-3 position-relative">
            Cart
            {/* cart badge */}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {badgeCount === 0 ? null : badgeCount}
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" className="nav px-3">
            FAQs
          </Link>
        </li>
      </ul>

      <div className="login-container col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Sign-up
        </button>
      </div>
    </header>
  );
}

/* <header>
      <div className="title">Shopping</div>
      <Link to={"/signup"}>
        <button className="login-button">LOGIN</button>
      </Link>
    </header> */
