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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
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
  }
`;

export default App;
