import styled from "styled-components";

const ContactStyle = styled.section`
  width: 100%;
  height: 50vh; // antes 100vh
  background-color: #3c4e90;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  img {
    object-fit: contain;
    height: 100%;
    width: 50%;
    margin-right: 1rem;
  }

  article {
    margin-left: 1rem;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    h2 {
      align-self: start;
      /* color: #90d8dd; */
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }

    ul {
      display: flex;
      flex-direction: row;
      width: 200px;
      justify-content: space-evenly;
      margin-top: 1rem;
      li {
        img {
          background-color: transparent;
          height: 27px;
          width: 27px;
        }
      }
    }
  }
`;

export default function Contact() {
  return (
    <ContactStyle id="contact">
      <img src="/luffyContact.svg" alt=""/>
      <article>
        <h2>
          Seguinos en nuestras <br /> redes!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
        <ul>
          <li>
            <img src="/icons/face.svg" alt="" />
          </li>
          <li>
            <img src="/icons/insta.svg" alt="" />
          </li>
          <li>
            <img src="/icons/x.svg" alt="" />
          </li>
        </ul>
      </article>
    </ContactStyle>
  );
}
