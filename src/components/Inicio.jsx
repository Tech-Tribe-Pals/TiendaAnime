import styled from "styled-components";

const Inicios = styled.section`
  background-color: #222222;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  h1 {
    color: white;
    font-size: 4rem;
    font-family: "Oxanium", cursive;
    text-shadow: -4px 1px 0px #3c4e90;
    margin-left: 5rem;
    margin-bottom: 2rem;
    animation: Letras 1.5s ease-in-out infinite;
  }

  h3 {
    color: grey;
    margin-left: 5rem;
  }

  div {
    margin-bottom: 7rem;
  }
  button {
    margin-top: 3rem;
    font-size: 1.2rem;
    margin-left: 5rem;
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
  .Estatua {
    z-index: 1;
    width: 450px;
    position: absolute;
    right: 10%;
    top: 20%;
    pointer-events: none;
    animation: Mecha 0.7s linear;
  }

  .Background-Vector-White {
    width: 100%;
    position: absolute;
    bottom: -10%;
    right: 0%;
    z-index: 0;
    pointer-events: none;
  }

  .Background-Vector-Blue {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0%;
    z-index: 1;
    pointer-events: none;
  }

  @keyframes Mecha {
    0% {
      transform: translateY(-150%);
    }
  }

  @keyframes Letras {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(4%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;

export default function Inicio() {
  return (
    <Inicios>
      <h1>
        Tu tienda online <br /> de Anime
      </h1>
      <h3>Los mejores productos al mejor precio</h3>
      <div>
        <button>Ver Catalogo</button>
      </div>

      <img className="Estatua" src="./Estatua.png" alt="" />
      <img
        className="Background-Vector-White"
        src="./Vector-White-Home.svg"
        alt="estatua"
      />
      <img
        className="Background-Vector-Blue"
        src="./Vector-Blue-Home.svg"
        alt="linea"
      />
    </Inicios>
  );
}
