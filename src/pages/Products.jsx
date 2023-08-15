import { useState, useEffect } from "react";
import { CardProds } from "../components/CardProds";
import styled from "styled-components";
// import GetProds from "../hooks/GetProds";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const ProductStyles = styled.main`
  width:100%;

  display:flex;
  flex-direction:column;
  align-items:center;


  nav {
    width:90%;
    margin-top:7rem;
    display: flex;
    justify-content: space-between;
    border: solid 2px #bfbfbf;
    border-radius: 40px;
    padding: 15px;

    box-shadow: 4px 7px 0px 0px #bfbfbf;

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
      border: solid 3px #333333;
      box-shadow: 2px 2px 0px 0px #333333;
      
      input {
        border: none;
        padding: 10px;
        width: 150px;
        border-radius: 17px 0 0 17px;
        :focus {
          outline: none;
        }
      }
      .searchIcon {
        background-color: #3c4e90;
        border-radius: 0 16px 16px 0;
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        border:solid  #333333 1px;
        box-shadow: 2px 4px 0px 0px #333333;
        img {
          width: 25px;
          margin-left: 5px;
          filter: invert(100%);
        }
      }
    }
  }
  .prods {
    margin-top:2rem;
    display: grid;
    width:90%;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 2rem;
  }


  @media (max-width: 576px) {

    .prods {
    margin-top:2rem;
    display: grid;
    width:100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-bottom: 2rem;
  }


  nav {
    width:90%;

  }





  }



`;

const Products = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_APP_URL
          }/api/products?search=${searchTerm}&filter=${filter}&page=${currentPage}&limit=9`
        );
        const data = await response.json();
        setProds(data.docs);
        setTotalPages(data.totalPages);
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      } catch (error) {
        console.log("Error al obtener los datos:", error);
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
      { loading && <Loader /> }
      {/* <nav>
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
      </nav> */}
      <section className="prods">
        {prods.length !== 0 && prods.map((item, i) => (
          <CardProds key={i} item={item} />
        ))}
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
