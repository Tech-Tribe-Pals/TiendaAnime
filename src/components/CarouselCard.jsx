import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: #485ba0;
  border-radius: 20px;
  height: 100%;

  .imgSection {
    width: 50%;
    display: flex;
    align-items: center;
    img {
        border-radius: 100%;
        width: 90%;
    }
  }
  .text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    h2 {
        margin-bottom: 20px;
    }
    button {
        margin-top: 40px;
        padding: 5px 15px;
        border-radius: 5px;
        border: none;
    }
  }
`;

const CarouselCard = ({ img }) => {
  return (
    <Card>
      <div className="text">
      <h2>Titulo</h2>
      <p>Texto</p>
      <button>Ver mas</button>
      </div>
      <div className="imgSection">
      <img src={img} />
      </div>
    </Card>
  );
};

export default CarouselCard;
