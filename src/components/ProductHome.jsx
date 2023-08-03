import { useEffect, useState } from "react";
import prodsAPI from "../api/prodsAPI";
import { CardProds, BigCardProds } from "./CardProds";
import styled from "styled-components";

const ProductHomeStyle = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 20px;
  h2 {
    align-self: flex-start;
    margin-left: 3.5rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    color: #3c4e90;
    font-size: 2em;
  }

  .sales {
    display: flex;
    gap: 50px;
    margin: 50px 0;
    width: 100%;
  }

  .news {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    border: solid 1px #000;
    border-radius: 10px;
    img {
      width: 50%;
    }
    .text {
      width: 50%;
      text-align: center;
      p {
        margin-top: 20px;
      }
    }
  }

  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  button {
    margin: 30px 0 20px 0;
    padding: 10px 20px;
    border-radius: 15px;
    border: solid 2px #000;
    font-weight: bold;
    background-color: transparent;
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
      <section className="sales" id="sales">
        {prods.length !== 0
          ? prods
              .slice(0, 2)
              .map((e, i) => (
                <BigCardProds className="cardHome" key={i} item={e} />
              ))
          : ""}
      </section>

      <section className="news" id="news">
        <img src="https://res.cloudinary.com/dcmic2snw/image/upload/v1691073685/tiendaAnime/image_118_qsreme.webp" />
        <div className="text">
          <h3>Mas ofertas!</h3>
          <p>Se te va a caer el ojete con los precios!</p>
          <button>Ver mas</button>
        </div>
      </section>

      <h2>Novedades</h2>

      <div className="container">
        {prods.length !== 0
          ? prods
              .slice(0, 6)
              .map((e, i) => (
                <CardProds className="cardHome" key={i} item={e} />
              ))
          : ""}
      </div>

      <button>Ver mas</button>
    </ProductHomeStyle>
  );
}

export default ProductHome;
