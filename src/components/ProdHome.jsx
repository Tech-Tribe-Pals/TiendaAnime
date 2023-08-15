import { useEffect, useState } from "react";
import prodsAPI from "../api/prodsAPI";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductHomeStyle = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  margin-bottom: 5rem;
  padding-left: 3rem;

  .linkVerMas {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 4rem 7rem 3rem 3rem;

    text-decoration: none;
    cursor: pointer;
    font-size: 1.6;
    font-weight: bold;
    color: white;
    background-color: #6a7bb4;
    align-self: center !important;
    border-radius: 0.8rem;
    padding: 0.3rem 0.9rem 0.3rem 0.9rem;
    border: rgb(0, 0, 0) solid 1px;
    box-shadow: rgba(0, 0, 0, 1) 0px 3px 0px 1px;
    :active {
      color: white;
      transform: scale(0.9);
      box-shadow: rgba(0, 0, 0, 1) 0px 1px 0px 1px;
    }
  }

  h2 {
    width: 90%;

    background-color: white;
    border: 1px #bfbfbf solid;
    border-radius: 1rem;
    padding: 1.2rem 1rem 1.2rem 1rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    color: #3c4e90;
    font-size: 2em;
    box-shadow: #bfbfbf 3px 3px 0px 4px;
  }

  .container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    width: 95%;
    padding-right: 4rem;
  }
`;

const CardProduct = styled.article`
  background-color: #ffffff;
  height: 445px;
  width: 350px;
  color: #000000;
  border-radius: 0.8rem;
  border: #bfbfbf solid 1px;
  -webkit-box-shadow: 10px 11px 0px 1px #bfbfbf;
  -moz-box-shadow: 10px 11px 0px 1px #bfbfbf;
  box-shadow: 10px 11px 0px 1px #bfbfbf;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-self: center;

  .container-Type {
    z-index: 1;
    background-color: white;
    position: absolute;
    border: solid black 1px;
    border-radius: 0.2rem;
    left: 2%;
    top: 35%;
    width: 20px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h5 {
      writing-mode: vertical-rl;
      text-orientation: upright;
      font-size: 0.6rem;
      pointer-events: none;
      color: #3c4e90;
      font-weight: bolder;
      background-color: white;
    }
  }

  .container-img {
    height: 60%;
    width: 85%;
    border: rgb(0, 0, 0) solid 1px;
    border-radius: 0.4rem;

    display: flex;
    justify-content: center;

    img {
      padding: 0.5rem;
      width: 70%;
    }
  }

  .container-info {
    height: 30%;
    width: 85%;
    border: rgb(0, 0, 0) solid 1px;
    margin-top: 0.7rem;
    border-radius: 0.5rem;
    text-align: start;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 2px;

    h3 {
      margin-left: 0.3rem;
      font-size: 0.7rem;
      align-self: flex-center;
    }

    div {
      padding: 0rem 0.7rem 0rem 0.9rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 1.3rem;
        font-weight: 600;
      }

      a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: bold;
        color: white;
        background-color: #75b46a;
        align-self: center !important;
        border-radius: 0.8rem;
        padding: 0.3rem 0.9rem 0.3rem 0.9rem;
        border: #6a7bb4 solid 1px;
        box-shadow: #ff4d4d 2px 3px 0px 1px;
        :active {
          color: white;
          transform: scale(0.9);
          box-shadow: #ff4d4d 1px 1px 0px 1px;
        }
      }
    }
  }
`;

function ProductHome() {
  const [prods, setProds] = useState([]);

  const getProds = async () => {
    const data = await prodsAPI.getProds();
    setProds(data.docs);
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <ProductHomeStyle>
      <h2>Novedades</h2>

      <div className="container">
        {prods.length !== 0 &&
          prods.slice(0, 6).map((e, i) => {
            // Mover el cálculo de las partes enteras y decimales del precio aquí dentro
            const priceParts = e.price.toFixed(2).split(".");
            const priceIntegerPart = priceParts[0];
            const priceDecimalPart = priceParts[1];

            return (
              <CardProduct key={i}>
                {/* Contenido del CardProduct */}
                <div className="container-img">
                  <img src={e.img} alt="imgProd" />
                </div>
                <div className="container-Type">
                  <h5>{e.brand}</h5>
                </div>
                <div className="container-info">
                  <h3>{e.name}</h3>
                  <div>
                    <p>
                      {priceIntegerPart}
                      {priceDecimalPart && <sup> {priceDecimalPart}</sup>}
                    </p>
                    <Link to={`/products/${e._id}`}>Detalles</Link>
                  </div>
                </div>
              </CardProduct>
            );
          })}
      </div>

      <Link className="linkVerMas" to={"/products"}>
        Ver mas
      </Link>
    </ProductHomeStyle>
  );
}

export default ProductHome;
