import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const CardProduct = styled.article`
  background-color: #ffffff;
  height: 350px;
  width: 300px;
  color: #000000;
  border-radius: 1rem;
  border: rgb(0, 0, 0) solid 1px;
  -webkit-box-shadow: 10px 11px 0px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 11px 0px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 11px 0px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-self: center;

  h5 {
    writing-mode: vertical-rl;
    text-orientation: upright;
    position: absolute;
    pointer-events: none;
    color: #3C4E90;
    font-weight: bolder;
    background-color: white;
    border: solid black 1px;
    padding: 0.5rem;
    border-radius: 0.7rem;
    left: 0;
    top: 35%;
  }

  .container-img {
    height: 55%;
    width: 85%;
    border: rgb(0, 0, 0) solid 1px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    justify-content: center;
  }

  .container-info {
    height: 30%;
    width: 85%;
    border: rgb(0, 0, 0) solid 1px;
    margin-top: 0.7rem;
    border-radius: 1rem;
    text-align: start;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;

    h3 {
      margin-top: 1rem;
      margin-right: 6rem;
      align-self: flex-center;
    }

    button {
      cursor: pointer;
      margin-right: 0.5rem;
      margin-bottom: 1rem;
      font-size: smaller;
      font-weight: bold;
      color: white;
      background-color: #75b46a;
      align-self: flex-end !important;
      border-radius: 0.8rem;
      padding: 0.5rem 1.5rem 0.5rem 1.5rem;
      margin-left: 0.8rem;
      border: rgb(0, 0, 0) solid 1px;
      box-shadow: rgba(0, 0, 0, 1) 2px 3px 0px 1px;

      :active {
        color: white;
        transform: scale(0.9);
        box-shadow: rgba(0, 0, 0, 1) 1px 1px 0px 1px;
      }
    }
  }
`;

export default function CardProds({ item }) {
  return (
    <CardProduct>
      <div className="container-img">
        <img src={ item.img } alt="imgProd" />
      </div>

      <h5>{ item.brand }</h5>

      <div className="container-info">
        <h3>{ item.name }</h3>
        <p>{ item.price }</p>
        <button>Comprar</button>
      </div>
    </CardProduct>
  );
}