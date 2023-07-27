import React from "react";
import styled from "styled-components";

const CartaOne = styled.article`
  height: 70vh;
  width: 70%;
  color: white;
  background-color: #485ba0;
  border-radius: 1.2rem;
  margin-right: 6rem;
  
  
`;

export default function CarouselOne() {
  return (
    <CartaOne>
      <article>
        <div>
          <h2>
            Cosplay y <br /> accesorios
          </h2>
          <ul>
            <li>trajes de exelente calidad</li>
            <li>variedad de diseños</li>
            <li>todos los talles</li>
          </ul>
        </div>
        <button>Ver Mas</button>
      </article>

      <img src="" alt="" />
    </CartaOne>
  );
}
