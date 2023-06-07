import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Products from "./pages/Products";
import Header_Nav from "./components/Header_Nav";
import "./App.css";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header_Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
