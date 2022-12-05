import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navbar from "./component/Navbar";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/Services" element={<Service/>} />
          {/* <Redirect to "/" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
