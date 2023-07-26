import { useState, useEffect } from "react";
import CardProds from "../components/CardProds";
import styled from "styled-components";
// import GetProds from "../hooks/GetProds";
import Pagination from "../components/Pagination";
import Loader from '../components/Loader'

const ProductStyles = styled.main`
  margin-top: 100px;
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
    padding: 15px;
    margin-bottom: 20px;
    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 5rem;
        :hover {
          cursor: pointer;
        }
      }
    }
    .search {
      border-radius: 20px;
      margin-right: 50px;
      display: flex;
      align-items: center;
      border: solid 4px #000;
      input {
        border: none;
        background-color: transparent;
        padding: 10px;
        width: 150px;
        border-radius: 20px 0 0 20px;
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_URL}/api/products?search=${searchTerm}&filter=${filter}&page=${currentPage}&limit=9`
        );
        const data = await response.json();
        setProds(data.docs);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, currentPage, filter]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };

  return (
    <ProductStyles>
      <nav>
        <ul>
          <li onClick={() => setFilter("casc")}>Tipo</li>
          <li onClick={() => setFilter("basc")}>Marca</li>
          <li onClick={() => setFilter("asc")}>Precio Min</li>
          <li onClick={() => setFilter("desc")}>Precio Max</li>
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
        {loading ? (
          <Loader />
        ) : (
          prods.map((item, i) => <CardProds key={i} item={item} />)
        )}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </ProductStyles>
  );
};

export default Products;