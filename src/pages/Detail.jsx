import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import prodsAPI from "../api/prodsAPI";
import Loader from "../components/Loader";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const DetailStyle = styled.main`
  display: flex;
  justify-content: center;
  div:nth-child(1) {
    img:nth-child(1) {
        height: 350px;
    }
    .preview {
      display: flex;
      justify-content: center;
      gap: 20px;
      img {
        border: solid 2px #000;
        border-radius: 5px;
        height: 100px;
        width: 100px;
      }
    }
  }
  div:nth-child(2) {
    .itemCounter {
      display: flex;
      align-items: center;
    }
    .buyBtn {
      margin-top: 20px;
      text-decoration: none;
      cursor: pointer;
      font-size: smaller;
      font-weight: bold;
      color: white;
      background-color: #75b46a;
      align-self: flex-end !important;
      border-radius: 0.8rem;
      padding: 0.5rem 1.5rem 0.5rem 1.5rem;
      margin-left: 0.8rem;
      border: rgb(0, 0, 0) solid 1px;
      box-shadow: rgba(0, 0, 0, 1) 2px 3px 0px 1px;

      :active {
        color: white;
        transform: scale(0.9);
        box-shadow: rgba(0, 0, 0, 1) 1px 1px 0px 1px;
      }
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState("");

  const { addToCart } = useContext(CartContext);

  const getProd = async () => {
    const prod = await prodsAPI.getProd(id);
    setProd(prod);
  };

  const navigate = useNavigate();

  const goToCart = () => {
    addToCart({ ...prod, quantity: 1 });
    navigate("/cart");
  };

  useEffect(() => {
    getProd();
  }, []);

  if (prod === "") {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <DetailStyle>
      <div className="imgContainer">
        <img src={prod.img} alt={prod.category} />
        <div className="preview">
          <img src={prod.img} alt={prod.category} />
          <img src={prod.img} alt={prod.category} />
          <img src={prod.img} alt={prod.category} />
        </div>
      </div>
      <div>
        <h3 className="infoContainer">{prod.name}</h3>
        <p>{prod.description}</p>
        <div className="itemCounter">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button onClick={() => goToCart()} className="buyBtn">
          Comprar
        </button>
      </div>
    </DetailStyle>
  );
};

export default Detail;
