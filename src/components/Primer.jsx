import { useState, useRef } from "react";
import styled from "styled-components";
import ImgCard from "./Segundo";

const CarouselStyle = styled.section`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  background-color: #ffffff;
  position: relative;

  .mountain {
    bottom: -10%;
    left: -2%;
    position: absolute;
    z-index: 0;
  }

  .sun {
    z-index: 0;
    position: absolute;
    left: -5%;
    top: -9%;
  }

  .arbol {
    z-index: 0;
    position: absolute;
    right: -30%;
    bottom: -30%;
  }
  .nube {
    
    position: absolute;
    left:0;
    bottom:10%;

    animation: movimiento 10s infinite linear;
  }

  @keyframes movimiento {
   
    0% {left:-10%; opacity:2;}

100%{left: 20%; opacity:0;}

  }













  .Displayer {
    margin-top: 0.5rem;
    z-index: 1;
    height: 65%;
    width: 95%;
    align-self: center;
  }
  .navegation {
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: end;
    height: 30%;
    width: 750px;
    background-color: #5F4D36;
    padding: 1rem;
    border-top-left-radius:17px;
    border-bottom-left-radius:17px;
    position:relative;


    .bird {
        top: -43%;

        position:absolute;
        z-index:1;
        width:75px;

    }


    .madera{
            height:100%;
            position:absolute;
            left:0;
            top:0;
            z-index:0;
        }

    }
    button {

        margin-right:3.5rem;
        border-radius:11px
    }
    
    .Selector {
      height: 100%;
      width:110px;
      object-fit:cover;
      z-index: 1;
      border-radius:11px
    }





  .show {
    display: flex;
  }
  .hide {
    display: none;
  }





  .Boton {
    color: whitesmoke;
    font-weight: bold;
    font-size: medium;
    background-color: #658564;
    border-radius: 17px;
    border-bottom: 9px solid #50684f;
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    width: 100px;
    height: 45px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    img {
      margin-left: 2px;
      height: 50%;
      width: 25%;
      filter: invert(100%);
    }
    :active {
      border-bottom: 0px;
      transform: translateY(2%) scale(0.9);
      transition: all 0.1s ease-in-out;
    }
  }
`








const Carouselin = () => {
  const [actual, setActual] = useState(0);
  const carousel = useRef(null);
  const arr = [
    {
      name: "Gardey",
      img: "./Foto1.webp",
      ruta: "/tandil",
      region: "Lorem 1",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      name: "Tandil",
      img: "./Foto2.webp",
      ruta: "/post",
      region: "Lorem 2",
      info: "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
    },
    {
      name: "Azul",
      img: "./Foto3.webp",
      ruta: "/post",
      region: "Lorem 3",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
  ];

  const handleClick = (pos) => {
    setActual(pos);
  };

  return (
    <CarouselStyle>
      <div ref={carousel} className="Displayer">
        {arr.map((item, i) => (
          <ImgCard
            cssClass={actual === i ? "show anim1" : "hide anim2"}
            key={i}
            img={item.img}
            ruta={item.ruta}
            region={item.region}
            info={item.info}
          />
        ))}
      </div>
      <div className="navegation">
        {arr.map((item, i) => (
          <button key={i} onClick={() => handleClick(i)}>
            <img className="Selector" src={item.img} alt="" />
          </button>
        ))}
        <img className="madera" src="./Tronco.svg" />
        <img  className="bird" src="./bird.svg" alt=""  />
      </div>
      <img className="sun" src="./sun.svg" alt=""  />
      <img className="mountain" src="./MountainRegionFondo.svg" alt="" />
      <img className="arbol" src="./arbol.svg" alt="" />
    <img width={75} className="nube" src="./cloud.svg" alt="" />
            

    </CarouselStyle>
  );
};

export default Carouselin;
