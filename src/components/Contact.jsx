import styled from "styled-components";

const ContactStyle = styled.section`
  display: flex;
  background-color: #485ba0;
  margin-bottom: -10px;
  height: 600px;
  .imgContainer {
    width: 50%;
    display: flex;
    justify-content: center;
    img {
        height: 100%;
    }
  }
  .text {
    color: #fff;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
        font-size: 48px;
    }
    p {
        font-weight: bold;
        margin: 40px 0;
    }
    .social {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyle id="contact">
      <div className="imgContainer">
        <img
          src="https://res.cloudinary.com/dcmic2snw/image/upload/v1691074319/tiendaAnime/image_112_db9cg4.png"
          alt="luffy"
        />
      </div>
      <div className="text">
        <h3>Seguinos en nuestras redes!</h3>
        <p>
          Nuestras redes son muy diversas pero desde que Elon Musk cambio el
          icono de twitter no sabemos que icono poner pero dejamos el pajarito
          porque queda bien.
        </p>
        <div className="social">
          <img src="/icons/x.svg" alt="twitter" />
          <img src="/icons/insta.svg" alt="instagram" />
          <img src="/icons/face.svg" alt="facebook" />
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;
