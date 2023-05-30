import React from "react";
import styled from "styled-components";
import CarouselOne from "./CarouselOne";

const Carousel = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #3c4e90;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  
  div {
    margin-top: 1rem;
    input{
    margin: 0px 0.5rem 0 0.5rem;
  }
  }

`;

export default function CarouselSection() {
  return (<Carousel>
    <CarouselOne />
    <div>
    <input type="radio" />
    <input type="radio" />
    <input type="radio" />
    </div>
  </Carousel>);
}
