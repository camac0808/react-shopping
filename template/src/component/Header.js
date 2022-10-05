import { Link } from 'react-router-dom';

export default function Header() {
  return (
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around py-3 mb-4 border-bottom">
      <div className="title d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        React Shopping
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="/cartpage" className="nav-link px-2 link-dark">Cart</Link></li>
        <li><Link to="#" className="nav-link px-2 link-dark">FAQs</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
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