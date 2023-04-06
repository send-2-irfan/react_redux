import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <div className="ui container" style={{ marginTop: "60px" }}>
          <Routes>
            <Route exact path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route>Page not found</Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
