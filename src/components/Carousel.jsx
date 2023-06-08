import React from "react";
import styled from "styled-components";

const CarouselStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;

  div {
    height: 100%;
    width: 60%;
    display: flex;
    
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    padding-left: 4rem;

    ul {
      list-style: square;
      li {
        margin-top: 2rem;
      }
    }
  }

  img {
    width: 250px;
  }
`;

const Carousel = ({ cssClass, titulo, num, num2, num3 }) => {
  return (
    <CarouselStyle className={cssClass}>
      <div>
        <h2>{titulo}</h2>
        <ul>
          <li>{num}</li>
          <li>{num2}</li>
          <li>{num3}</li>
        </ul>

        <button>Ver Mas</button>
      </div>
      <img src="./logo.svg" alt="" />
    </CarouselStyle>
  );
};
export default Carousel;
