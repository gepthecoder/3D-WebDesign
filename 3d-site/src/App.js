import Spline from "@splinetool/react-spline";
import styled from "styled-components";

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

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }
`;

export default App;
