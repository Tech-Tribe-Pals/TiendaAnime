import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #485ba0;
  border-radius: 20px;
  width:100%;
  height: 100%;

  .imgSection {
    background-color: #d6d6d6;
    width: 400px;
    height:400px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
  
      height:50%;
      margin-right:.6rem;
    }
  }
  .text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    h2 {
      margin-bottom: 20px;
    }
    button {
    z-index: 1;
    margin-top: 3rem;
    font-size: 1.2rem;
    
    padding: 0.6rem 3rem 0.6rem 3rem;
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

const CarouselCard = ({ img, title, text1, text2,text3 }) => {
 

 



  return (
    <Card>
      <div className="text">
        <h2>{title}</h2>
        <button>Ver mas</button>
      </div>
      <div className="imgSection">
        <img src={img} />
      </div>
    </Card>
  );
};

export default CarouselCard;
