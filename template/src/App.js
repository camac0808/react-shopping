import Main from "./component/Main";
import Detail from "./component/Detail";
import Purchase from "./component/Purchase";
import Signup from "./component/Signup";
import Cartpage from "./component/Cartpage";
import Create from "./component/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import CountProvider from './context/CountProvider';

function App() {
  return (
      <CountProvider>
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          {/* router 안에 다 집어넣어야 오류 안남 */}
          <Header />
          <div className='container-fluid'>
            <Routes>
              <Route path={`/`} element={<Main />} />
              <Route path={`/cartpage`} element={<Cartpage />} />
              <Route path={`/card/:id`} element={<Detail />} />
              <Route path={`/purchase/:id`} element={<Purchase />} />
              <Route path={`/signup`} element={<Signup />} />
              <Route path={`/create`} element={<Create />} />
            </Routes>
          </div>
        </Router>
      </CountProvider>
  );
}
export default App;
// 주석 색깔입니다
