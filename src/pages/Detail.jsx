import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import prodsAPI from "../api/prodsAPI";
import Loader from "../components/Loader";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const DetailStyle = styled.main`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  min-height: 80vh;
  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .previewImg {
      height: 60vh;
      width: 80%;
      border: solid 3px #000;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        justify-self: center;
        height: 90%;
        margin-bottom: 20px;
      }
    }
    .previewList {
      display: flex;
      justify-content: center;
      gap: 20px;
      height: 20vh;
      width: 100%;
      .previewItem {
        border: solid 3px #000;
        width: 25%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        padding: 5px;
        img {
          height: 100%;
        }
      }
    }
  }
  article:nth-child(2) {
    justify-content: space-around;
    height: 70%;
    margin: auto 0;
    .footerContainer {
      width: 70%;
      display: flex;
      justify-content: space-between;
      .itemCounter {
        display: flex;
        align-items: center;
        position: relative;
        button {
          background-color: transparent;
          border: none;
          font-size: 35px;
          width: 50px;
          border: solid 2px transparent;
          border-radius: 5px;
          font-weight: bold;
          padding: 0px 10px;
          &:hover {
            border: solid 2px #000;
            cursor: pointer;
          }
        }
        p:nth-child(1) {
          position: absolute;
          top: -30px;
        }
        p {
          font-size: 20px;
          padding: 5px 15px;
        }
      }
      .buyBtn {
        padding: 5px 15px;
        border-radius: 10px;
      }
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState("");
  const [quantity, setQuantity] = useState(1)

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

  const changeQuantity = (num) => {
    if (num === -1 && quantity === 1) {
      console.log('No se puede comprar menos de 1 producto');
    } else if (num === 1 && quantity === prod.stock) {
      console.log('No hay mas stock de este producto');
    } else {
      setQuantity(quantity + num)
    }
  }

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
      <article className="imgContainer">
        <div className="previewImg">
          <img src={prod.img} alt={prod.category} />
        </div>
        <div className="previewList">
          {[1, 2, 3].map((e, i) => (
            <div className="previewItem" key={i}>
              <img src={prod.img} alt={prod.category} />
            </div>
          ))}
        </div>
      </article>
      <article>
        <h3 className="infoContainer">{prod.name}</h3>
        <p>{prod.description}</p>
        <div className="footerContainer">
          <div className="itemCounter">
          <p>Stock: {prod.stock === 1 ? 'Ultimo disponible' : prod.stock}</p>
            <button onClick={() => changeQuantity(-1)}>-</button>
            <p>{ quantity }</p>
            <button onClick={() => changeQuantity(1)}>+</button>
          </div>
          <button onClick={() => goToCart()} className="buyBtn">
            Comprar
          </button>
        </div>
      </article>
    </DetailStyle>
  );
};

export default Detail;
