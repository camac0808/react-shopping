import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="title">Shopping</div>
      <Link to={"/signup"}>
        <button className="login-button">LOGIN</button>
      </Link>
    </header>
  );
}
