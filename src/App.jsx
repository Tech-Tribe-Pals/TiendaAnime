import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import "./App.css";
import Detail from "./pages/Detail";
import Header_Nav from "../../tiendaAnimeComponentes/src/component/Header_Nav";

const BrowserRouter = styled.main`
  background-color: #222222;
  scroll-behavior: smooth;
`;

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
