import CardProds from "../components/CardProds";
import styled from "styled-components";
import GetProds from "../hooks/GetProds";
import { useState } from "react";

const ProductStyles = styled.main`
  margin-top: 20px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:flex-start;
  height:100vh;
  width:100%;
  .prods {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  nav {
    width: 95%;
    display: flex;
    justify-content: space-between;
    border: solid 2px #000;
    border-radius: 36px;
    padding: 15px;
    box-shadow: 4px 3px 0px 4px rgb(0, 0, 0, 0.25);
    font-weight: 600;
    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 5rem;
      }
    }
    .search {
      border-radius: 25px;
      margin-right: 50px;
      display: flex;
      align-items: center;
      border: solid 4px #000;
      box-shadow: 2px 3px 0px 0px black;

      input {
        outline: none;
        border: none;
        background-color: transparent;
        padding: 7px;
        width: 100px;
        border-radius: 20px 0 0 20px;
      }
      .searchIcon {
        
        background-color: #3c4e90;
        border-radius: 0 20px 20px 0;
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
  const [loading, prods, setLoading, setProds] = GetProds();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_URL}/api/products?search=${searchTerm}`
      );
      const data = await response.json();
      setProds(data);
      setLoading(false);
    } catch (error) {
      console.log("Error al obtener los datos:", error);
      setLoading(false);
    }
  };

  return (
    <ProductStyles>
      <nav>
        <ul>
          <li>Tipo</li>
          <li>Marca</li>
          <li>Precio Max</li>
          <li>Precio Min</li>
        </ul>
        <div className="search">
          <input
            placeholder="Buscar..."
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="searchIcon">
            <img src="./searchIcon.svg" />
          </div>
        </div>
      </nav>
      <section className="prods">
        {loading ? (
          <img className="loader" src={"./naruto.gif"} />
        ) : (
          prods.map((item, i) => <CardProds key={i} item={item} />)
        )}
      </section>
    </ProductStyles>
  );
};

export default Products;
