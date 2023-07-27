import React, { useState } from "react";
import styled from "styled-components";
import CarouselOne from "./CarouselOne";

const Carousel = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #3c4e90;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  article {
    height: 70vh;
    width: 70%;
    color: white;
    background-color: #485ba0;
    border-radius: 1.2rem;
    margin-right: 6rem;

    .carouselContainer {
      display: flex;
      flex-direction: column;
      align-items: center;

      height: 100%;
      width: 40%;

      button {
        margin-top: 1rem;
        margin-right: 2rem;
        font-size: 0.9rem;
        padding: 0.5rem 2rem 0.5rem 2rem;
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

      div {
        height: 80%;
        width: 100%;
        padding: 3rem;
        display: flex;
        flex-direction: column;

        h2 {
          font-size: xx-large;
        }

        ul {
          align-self: flex-start;
          display: flex;
          flex-direction: column;
          list-style-type: square;
          font-size: larger;
          li {
            margin-top: 1rem;
          }
        }
      }
    }
  }
`;

export default function CarouselSection() {
  const arr = [{ name: "img1", punto:[{name:"hola"}] }, { name: "img2" }, { name: "img3" }];

  const [carousel, setCarousel] = useState(1);

  const cambiar = (valor) => {
    setCarousel(valor);
  };

  return (
    <Carousel>
      <article>
        <div className="carouselContainer">
          {arr.map((e, i) =>
            carousel == i ? (
              <div key={i}>
                <h2>{e.name}</h2>
                <ul>
                   <li></li>
                   <li></li>
                   <li></li>
                </ul>
                <button>Ver Mas</button>

                <img src="" alt="" />


              </div>

          




            ) : null
          )}
        </div>
      </article>
      <div>
        {arr.map((e, i) => (
          <button key={i} onClick={() => cambiar(i)}>
            Boton{i + 1}
          </button>
        ))}
      </div>
    </Carousel>
  );
}
