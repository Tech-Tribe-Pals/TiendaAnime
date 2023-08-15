import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

// eslint-disable-next-line react-refresh/only-export-components
const HeaderStyle = styled.header`
position:fixed;
height:90px;
width:100%;
  top: 0;
  z-index: 2;
  nav {
    height:100%;
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
        button {
          color: #3c4e90;
          font-weight:bolder;
          background-color: transparent;
          border:none;
          cursor:pointer;
       
          :hover {
            color: #af1313;
            border-bottom:solid #af1313 2px;
          }

        }

        .cart {
          cursor: pointer;
          position: relative;

          :hover {
            color: #af1313;
          }

          img {
            height: 35px;
            width: 35px;
            filter: invert(26%) sepia(55%) saturate(603%) hue-rotate(190deg)
              brightness(103%) contrast(94%);
          }
          p {
            font-size: .8rem;
            position: absolute;
            top: -25px;
            right: -5px;
          }
        }

        font-weight: bold;
        margin-left: 2.7rem;
        margin-right: 2.7rem;
        font-size: large;
      }
    }
  }


  @media (max-width: 576px) {
    position:none;
    width:100%;
    nav {
    height: 120px;
    width: 100%;
    background-color: white;
    border-radius: 0rem;
      position:fixed;

    padding:0rem;
   
    
   
  
   
  
    img {display:none;
      height: 35px;
      width: 35px;
    }
  }


  }

`;

export default function Header_Nav() {
  const { cart } = useContext(CartContext);

  return (
    <HeaderStyle>
      <nav>
      <Link to={'/'}>
      <img src="/iconNav.svg" alt="icono" />
      </Link>
        <ul>
          <li>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li>
            <Link to={'/products'}>
              Tienda
            </Link>
          </li>
          <li>
            <Link className="cart" to={'/cart'}>
              <img src="/baskets-market.svg" alt="canasta" />
              <p className="cartNum">{cart.length}</p>
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}
