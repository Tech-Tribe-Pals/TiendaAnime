import styled from "styled-components";
import { Link } from "react-router-dom";
import BotonStyle from "../BotonStyle";

const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  height: 100%;

  div {
    height: 300px;
    width: 30%;
    color: #353535;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;

    .boton {

        align-self:center;

    }

  }

  .Region{padding:1rem;
    border-radius: 15px;
    background-color: #685842;
    height: 100%;
    width:600px;
    border-bottom: 10px #53493C solid;
    margin-right:4rem;
  }
`;

const ImgCard = ({ cssClass, img, ruta, region, info }) => {
  return (
    <Display className={cssClass}>
      <div>
        <h2>{region}</h2>
        <p>{info}</p>
        <Link className="boton" to={ruta}>
          <BotonStyle icon={"./explorar.svg"} info={"Explorar"} />
        </Link>
      </div>
      <img className="Region" src={img} />
    </Display>
  );
};

export default ImgCard;
