import Header from "./component/Header";
import Main from "./component/Main";
import Detail from "./component/Detail";
import Purchase from "./component/Purchase";
import Signup from "./component/Signup";
import Cartpage from "./component/Cartpage";
import Create from "./component/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
    {/* router 안에 다 집어넣어야 오류 안남 */}
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Header />
        <Routes>
          <Route path={`/`} element={<Main />} />
          <Route path={`/cartpage`} element={<Cartpage />} />
          <Route path={`/card/:id`} element={<Detail />} />
          <Route path={`/purchase/:id`} element={<Purchase />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/create`} element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
// 주석 색깔입니다
