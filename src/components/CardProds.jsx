import { Link } from "react-router-dom";
import styled from "styled-components";
// eslint-disable-next-line react-refresh/only-export-components
const CardProduct = styled.article`
  background-color: #ffffff;
  height: 350px;
  width: 300px;
  color: #000000;
  border-radius: 1rem;
  border: rgb(0, 0, 0) solid 1px;
  -webkit-box-shadow: 10px 11px 0px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 11px 0px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 11px 0px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-self: center;

  h5 {
    writing-mode: vertical-rl;
    text-orientation: upright;
    position: absolute;
    pointer-events: none;
    color: #3c4e90;
    font-weight: bolder;
    background-color: white;
    border: solid black 1px;
    padding: 0.5rem;
    border-radius: 0.7rem;
    left: 0;
    top: 35%;
  }

  .container-img {
    height: 55%;
    width: 85%;
    border: rgb(0, 0, 0) solid 1px;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
  }

  .container-info {
    height: 30%;
    width: 85%;
    border: rgb(0, 0, 0) solid 1px;
    margin-top: 0.7rem;
    border-radius: 1rem;
    text-align: start;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-around;

    h3 {
      margin-left: 0.3rem;
      font-size: 0.9rem;
      align-self: flex-center;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding:0rem 1.2rem;

      p {
        font-weight: bolder;
      }

      a {
        padding: 0.4rem 1rem;
        border: unset;
        border-radius: 10px;
        color: #fbfeff;
        z-index: 1;
        background: #75b46a;
        position: relative;
        font-weight: bold;
        font-size: 12px;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
        overflow: hidden;
      }

      a::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 10px;
        background-color: #212121;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
      }

      a:hover {
        color: #e8e8e8;
      }

      a:hover::before {
        width: 100%;
      }
    }
  }
`;

const BigCard = styled.article`
  border: solid 1px #bfbfbf;
  border-radius: 30px;
  width: 50%;
  height: 350px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  box-shadow: #bfbfbf 3px 3px 0px 4px;
  padding: 1rem;
  .container-img {
    height: 300px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 90%;
      background-color: transparent;
    }
  }
  .container-price-button {
    height: 70%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price-detail {
      display: flex;
      flex-direction: row;

      span {
        margin: 1rem;
        font-size: xx-large;
        font-weight: bold;
      }

      p {
        text-decoration: line-through;
        font-weight: bold;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        font-size: smaller;
        font-weight: bold;
        color: white;
        background-color: #75b46a;
        align-self: flex-end !important;
        border-radius: 0.8rem;
        padding: 0.4rem 1rem 0.4rem 1rem;

        margin-left: 4rem;
        border: rgb(0, 0, 0) solid 1px;
        box-shadow: rgba(0, 0, 0, 1) 2px 3px 0px 0px;
        :active {
          color: white;
          transform: scale(0.9);
          box-shadow: rgba(0, 0, 0, 1) 1px 1px 0px 0px;
        }
      }
    }
  }
`;

export function CardProds({ item }) {
  const priceParts = item.price.toFixed(2).split(".");
  const priceIntegerPart = priceParts[0];
  const priceDecimalPart = priceParts[1];

  return (
    <CardProduct>
      <div className="container-img">
        <img src={item.img} alt="imgProd" />
      </div>
      <h5>{item.brand}</h5>
      <div className="container-info">
        <h3>{item.name}</h3>
        <div className="container-price-button">
          <p className="p-container">
            {priceIntegerPart}
            {priceDecimalPart && <sup> {priceDecimalPart}</sup>}
          </p>
          <Link to={`/products/${item._id}`}>Comprar</Link>
        </div>
      </div>
    </CardProduct>
  );
}

export function BigCardProds({ item }) {
  const priceParts = item.price.toFixed(2).split(".");
  const priceIntegerPart = priceParts[0];
  const priceDecimalPart = priceParts[1];

  return (
    <BigCard>
      <div className="container-img">
        <img src={item.img} alt="imgProd" />
      </div>
      <div className="container-price-button">
        <h3>{item.name}</h3>
        <div className="price-detail">
          <span>0,25</span>
          <p>
            {priceIntegerPart}
            {priceDecimalPart && <sup> {priceDecimalPart}</sup>}
          </p>
          <Link to={`/products/${item._id}`}>Comprar aqui</Link>
        </div>{" "}
      </div>
    </BigCard>
  );
}
