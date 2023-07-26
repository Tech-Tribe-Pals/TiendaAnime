import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

// eslint-disable-next-line react-refresh/only-export-components
const Nav = styled.nav`
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
  position: fixed;
  z-index: 4;
  top: 0;

  img {
    height: 55px;
    width: 55px;
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
    li {
      font-weight: bold;
      margin-left: 2.7rem;
      margin-right: 2.7rem;
      font-size: large;
      .cartNum {
        position: absolute;
        bottom: 0;
      }
      img {
        filter: invert(26%) sepia(55%) saturate(603%) hue-rotate(190deg)
          brightness(103%) contrast(94%);
        width: 40px;
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
  
  const { cart } = useContext(CartContext)
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
      <Nav>
        <img src="/iconNav.svg" alt="icono" />
        <img src="./logo.svg" alt="" />
        <ul>
          <li>
            <button onClick={() => handleNavigation('/products')}>
             fede
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/home')}>
                home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/ruta2')}>

            </button>
          </li>
          <li>
            <div onClick={() => handleNavigation('/cart')}><img src="/baskets-market.svg" alt="canasta" /><p className="cartNum">{cart.length}</p></div>
          </li>
        </ul>
      </Nav>
      
        <img className="puertaDerecha" src="/Puerta derecha.png" alt="" />
        <img className="puertaIzquierda" src="/Puerta izquierda.png" alt="" />
    
    </HeaderStyle>
  );
}
