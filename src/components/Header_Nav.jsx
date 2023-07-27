import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'

const HeaderStyle = styled.header`

  position:sticky;
  top:0;
  z-index:2;
  background-color:transparent;

  .puertaDerecha {
    height: 100%;
    width: 55.4%;
    z-index: 4;
    position: fixed;
    top:0;
    transform: translateX(200%);
    animation: ${({ isAnimated }) => (isAnimated ? derechaAnimation : 'none')} 3s ease;
  }

  .puertaIzquierda {
    position: fixed;
    top:0;
    left: 0;
    height: 100%;
    width: 50%;
    transform: translateX(-100%);
    z-index: 3;
    animation: ${({ isAnimated }) => (isAnimated ? izquierdaAnimation : 'none')} 2.9s ease;
  }

  nav {
    height: 90px;
    width: 100%;
    background-color: white;
    border-radius: 1rem;
    border: solid #3c4e90 3px;
    display: flex;
    padding-left: 3rem;
    padding-right: 6rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 2;
    top: 0;

    img {
      height: 55px;
      width: 55px;
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      color: #3c4e90;
      display: flex;
      align-items: center;

      li {
        font-weight: bold;
        margin-left: 2.7rem;
        margin-right: 2.7rem;
        font-size: large;

        img {
          filter: invert(26%) sepia(55%) saturate(603%) hue-rotate(190deg)
            brightness(103%) contrast(94%);
          width: 40px;
        }
      }
    }
  }
`;

const derechaAnimation = keyframes`
  25% {
    transform: translateX(80.5%);
  }
  50% {
    transform: translateX(80.5%);
  }
  100% {
    transform: translateX(200%);
  }
`;

const izquierdaAnimation = keyframes`
  25% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export default function Header_Nav() {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isAnimated) {
      timeoutId = setTimeout(() => {
        setIsAnimated(false);
      }, 2900); // Duración de la animación en milisegundos
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAnimated]);

  const handleNavigation = (route) => {
    setIsAnimated(true);
    setTimeout(() => {
      navigate(route);
    }, 1400); // Retardo antes de la redirección en milisegundos
  };

  return (
    <HeaderStyle isAnimated={isAnimated}>
      <nav>

      <img src="./logo.svg" alt="" />

        <ul>
          <li>
            <button onClick={() => handleNavigation('/products')}>
             fede
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/')}>
                home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/ruta2')}>

            </button>
          </li>
          <li>
            <div onClick={() => handleNavigation('/ruta3')}>
              
            </div>
          </li>
        </ul>
      </nav>
      
        <img className="puertaDerecha" src="/Puerta derecha.png" alt="" />
        <img className="puertaIzquierda" src="/Puerta izquierda.png" alt="" />
    
    </HeaderStyle>
  );
}
