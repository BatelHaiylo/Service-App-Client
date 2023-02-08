import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routing from "./AppRoute/Routing";
import CategoryNavbar from "./component/Navbar/CategoryNavbar";
import Cookies from "./component/pop/Cookies";

export default function App() {
  const current = window.location.pathname;
  const bool = current == '/'? true :false

  return (
    <div className="App">
      <BrowserRouter>
        <CategoryNavbar bool={bool}/>
        <Routing />
        {/* <Cookies style={{
          position: 'sticky',
          bottom:'0',
          zIndex: '0',
        }}/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
