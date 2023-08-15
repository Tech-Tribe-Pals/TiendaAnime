import { useState, useEffect } from "react";
import { CardProds } from "../components/CardProds";
import styled from "styled-components";
// import GetProds from "../hooks/GetProds";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductStyles = styled.main`
  .prods {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 20px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    border: solid 2px #000;
    border-radius: 10px;
    padding: 15px 60px;
    margin-bottom: 20px;
    ul {
      display: flex;
      align-items: center;
      gap: 80px;
      li {
        :hover {
          cursor: pointer;
        }
      }
      li:nth-child(1) {
        position: relative;
        ol {
          padding: 5px;
          width: 100px;
          border: solid 1px #000;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          border-radius: 15px;
          z-index: 2;
          li {
            padding: 5px;
            width: 100%;
            border-radius: 10px;
            &:hover {
              background-color: #3c4e90;
            }
            &:hover a {
              color: #fff;
            }
          }
        }
      }
    }
    .search {
      border-radius: 20px;
      display: flex;
      align-items: center;
      border: solid 4px #000;
      input {
        border: none;
        background-color: transparent;
        padding: 10px;
        width: 150px;
        border-radius: 20px 0 0 20px;
        :focus {
          outline: none;
        }
      }
      .searchIcon {
        background-color: #3c4e90;
        border-radius: 0 13px 13px 0;
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 25px;
          margin-left: 5px;
          filter: invert(100%);
        }
      }
    }
  }
`;

const Products = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("");
  const [types, setTypes] = useState(false);
  const [order, setOrder] = useState('asc');

  const location = useLocation();
  const navigation = useNavigate();

  const page =
    location.search.split("")[location.search.split("").length - 1] || 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_APP_URL
          }/api/products?search=${searchTerm}&filter=${filter}&page=${page}&limit=9&order=${order}`
        );
        const data = await response.json();
        setProds(data.docs);
        setTotalPages(data.totalPages);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [page, filter, order]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const handlePageChange = async (page) => {
    navigation(`/products?page=${page}`);
  };

  const categories = ["ropa", "funko pop", "cartas", "figuras", "mangas"];

  return (
    <ProductStyles>
      {loading && /*<Loader />  */ ""}
      <nav>
        <ul>
          <li onClick={() => setTypes(!types)}>
            Tipo
            <ol style={types ? { display: "flex" } : { display: "none" }}>
              {categories.map((e, i) => (
                <li key={i}>
                  <Link onClick={() => setFilter(e)}>{e}</Link>
                </li>
              ))}
            </ol>
          </li>
          <li onClick={() => setOrder("asc")}>Precio Min</li>
          <li onClick={() => setOrder("desc")}>Precio Max</li>
        </ul>
        <div className="search">
          <input
            placeholder="Buscar..."
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="searchIcon">
            <img src="./searchIcon.svg" alt="Search Icon" />
          </div>
        </div>
      </nav>
      <section className="prods">
        {prods.length !== 0 &&
          prods.map((item, i) => <CardProds key={i} item={item} />)}
      </section>
      <Pagination
        currentPage={Number(page)}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </ProductStyles>
  );
};

export default Products;
