import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

export default function Header_Nav() {
  return (
    <header>
      <Nav>
        <img src="./iconNav.svg" alt="icono" />
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Tienda</Link>
          </li>
          <li>
            <img src="./baskets-market.svg" alt="canasta" />
          </li>
        </ul>
      </Nav>
    </header>
  );
}
