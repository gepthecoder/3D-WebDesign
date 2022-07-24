import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/logo.svg";
import Twitter from "./images/icon-twitter.svg";
import Youtube from "./images/icon-youtube.svg";
import Laptop from "./images/icon-laptop.svg";

function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/TM-uvVIUVs3hNtQq/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="Logo" />{" "}
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button> Get Started </button>
          </li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>
          The essential factors of effective teams include psychological safety,
          interpersonal sensitivity and dependability. Here are three ways you
          can start building a foundation for effective teams.
        </p>

        <button>
          <img src={Laptop} alt="Download"></img> Download For Windows
        </button>
      </Content>
      <Social>
        <div />
        <img src={Twitter} alt="Twitter"></img>
        <img src={Youtube} alt="Youtube"></img>
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transition: 1s;
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transition: 1s;
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transition: 1s;
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transition: 1s;
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    transition: 1s;
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      transition: 1s;
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      transition: 1s;
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      transition: 1s;
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    font-size: 16px;
    padding: 20px 30px;
    border-radius: 14px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      transition: 1s;
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  marign: 0 30px 0 100px;
  padding: 0;
  margin-left: 100px;

  @media (max-width: 1024px) {
    transition: 1s;
    margin: 0 30px;
  }

  li {
    list-style: none;
    marign: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    transition: 1s;
    justify-content: space-between;
    li: nth-child(2),
    li: nth-child(3),
    li: nth-child(4),
    li: nth-child(5) {
      display: none;
    },
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33%,
      #1306dd 65%,
      #aa0eb2 100%
    );
  }

  @media (max-width: 1024px) {
    transition: 1s;
    display: none;
  }
`;

export default App;
