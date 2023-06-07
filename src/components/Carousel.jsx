import { useRef, useState } from "react";
import styled from "styled-components";

const CarouselStyle = styled.section`
  img {
    width: 250px;
  }
`;

const Carousel = () => {
  const arr = ["img1", "img2", "img3"];
  const carousel = useRef("carousel");
  const [position, setPosition] = useState(0);

  const changeElem = (elem) => {
    setPosition(elem);
    carousel.current.children[elem];
  };

  return (
    <CarouselStyle ref={carousel}>
      <div className="imgs">
        {arr.map((e, i) => (
          <img
            className={position === i ? "show" : "hide"}
            key={i}
            src={`./${e}.jpg`}
          />
        ))}
      </div>
      <div className="buttons">
        {arr.map((e, i) => (
          <button key={i} onClick={() => changeElem(i)}>
            {e}
          </button>
        ))}
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
