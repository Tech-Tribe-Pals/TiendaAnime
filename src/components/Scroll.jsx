import { useState } from 'react';
import styled from 'styled-components';

const ScrollStyle = styled.div`
  width: 50px;
  height: 250px;
  background-color: #545;
  overflow: hidden;
  position: sticky;

  p {
    height: 25%;
    cursor: pointer;
  }
`;

const Scroll = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClick = (index) => {
    setStartIndex(index);
  };

  return (
    <ScrollStyle>
      <p onClick={() => handleClick(0)}>1</p>
      <p onClick={() => handleClick(1)}>2</p>
      <p onClick={() => handleClick(1)}>3</p>
      <p onClick={() => handleClick(2)}>4</p>
    </ScrollStyle>
  );
};

export default Scroll;
