import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Carousel = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #3c4e90;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 1rem;
    input {
      margin: 0px 0.5rem 0 0.5rem;
    }
  }
`;

export default function CarouselSection() {
  const [CarouselState, setCarousel] = useState(1);
  const [Data, setData] = useState([]);

  useEffect(() => {
    getFetch();
    localStorage.setItem("date", Carousel)
  }, []);

  async function getFetch() {
    try {
      const respuesta = await axios.get("ArrayCarousel.json");
      setData(respuesta.data);
    } catch (error) {
      console.error(
        "Ha ocurrido un error al recibir los datos. Verifique el código.",
        error
      );
    }
  }




  const numero = (num) => {
    setCarousel(num);
    localStorage.setItem("date", num)
  };



  return (
    <Carousel>
      <article>
      {Data.map((e, i) =>
        CarouselState === i ? <div key={i}>{e.name}</div> : null
      )}</article>

      <nav>
        {Data.map((e, i) => (
          <button key={i} onClick={() => numero(i)}>
            Boton{i}
          </button>
        ))}
      </nav>
    </Carousel>
  );
}
