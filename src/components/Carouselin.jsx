import { useState, useRef } from "react";
import styled from "styled-components";
import ImgCard from "./ImgCard";

const CarouselStyle = styled.section`
  img {
    height: 250px;
  }
  .show {
    display: flex;
  }
  .hide {
    display: none;
  }
`;

const Carouselin = () => {
  const [actual, setActual] = useState(0);
  
  const arr = [{ img: "img1" }, { img: "img2" }, { img: "img3" }];

  const handleClick = (pos) => {
    setActual(pos);
  };

  return (
    <CarouselStyle ref={carousel}>
      {arr.map((item, i) => (
        <ImgCard
          cssClass={actual === i ? "show anim1" : "hide anim2"}
          key={i}
          img={item.img}
        />
      ))}
      {arr.map((item, i) => (
        <button key={i} onClick={() => handleClick(i)}>
          Cambiar
        </button>
      ))}
    </CarouselStyle>
  );
};

export default Carouselin;
