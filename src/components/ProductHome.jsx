import { useEffect, useState } from "react";
import prodsAPI from "../api/prodsAPI";
import Loader from "./Loader";
import CardProds from "./CardProds";
import styled from "styled-components";

const ProductHomeStyle = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 80%;
 
  

  h2 {
    align-self:flex-start;
    margin-left:3.5rem;
    margin-bottom:2rem;
    margin-top:1rem;
    color:#3c4e90;
    font-size:2em;
  }

    .container {
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        gap:2rem;

        

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

  if (prods.length === 0) {
    Loader();
  }

  return (
    <ProductHomeStyle>
      <h2>Novedades</h2>


      <div className="container">
      {prods.slice(0, 6).map((e, i) => (
        <CardProds className="cardHome" key={i} item={e} />
      ))}</div>
    </ProductHomeStyle>
  );
}

export default ProductHome;
