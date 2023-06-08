import { React, useState, useRef } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import arr from "./array";

const CartaOne = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #3c4e90;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .show {
    display: flex;
  }
  .hiden {
    display: none;
  }

  .botones {
    margin-right: 5px;
    margin-left: 5px;
    margin: 5px;
    height: 20px;
    width: 20px;
    margin-top: 2rem;
    content: " ";
    border-radius: 50%;
    border: none;

    :active {
      background-color: red;
    }
  }


  .rojo { background-color: red;}

  .blanco {background-color: #302a2a;}



  article {
    height: 70%;
    width: 70%;
    color: white;
    background-color: #485ba0;
    border-radius: 1.2rem;
    margin-right: 6rem;

    button {
      margin-left: 2rem;
      margin-top: 3rem;
      font-size: 1.2rem;
      padding: 0.5rem 1.9rem 0.5rem 1.9rem;
      border-radius: 0.8rem;
      border: #3c4e90 solid 3px;
      font-family: "Oxanium", cursive;
      font-weight: 700;
      cursor: pointer;
      color: #3c4e90;
      box-shadow: -6px 4px 0px 0px #af1313;

      :hover {
        color: #2f3c6d;
        border: #2f3c6d solid 3px;
        transition: all 0.1s ease-in-out;
      }

      :active {
        transform: translate(-3%, 3%);
        background-color: #e9e9e9;
        color: #2f3c6d;
        border: #2f3c6d solid 3px;
        box-shadow: -0px 0px 0px 0px #af1313;
      }
    }
  }
`;

export default function CarouselOne() {
  const [actual, setActual] = useState(0);
  const carousel = useRef(null);
  const botonIndice = useRef();

  const handleClick = (i) => {
    setActual(i);
    
  };


  return (
    <CartaOne>
      <article ref={carousel}>
        {arr.map((item, i) => (
          <Carousel
            cssClass={actual === i ? "show" : "hiden"}
            key={i}
            titulo={item.name}
            num={item.num}
            num2={item.num2}
            num3={item.num3}
          />
        ))}
      </article>
      <div ref={botonIndice}>
        {arr.map((item, i) => (
          <button
            className={botonIndice == i ? "rojo" : "blanco"}
            key={i}
            onClick={() => handleClick(i)}
          ></button>
        ))}
      </div>
    </CartaOne>
  );
}
