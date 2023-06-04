import styled, { keyframes } from "styled-components";

const dotsAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(-20px);
  }
  66% {
    transform: translateX(-40px);
  }
  100% {
    transform: translateX(-60px);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DotContainer = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
  margin-right: 5px;
  animation: ${dotsAnimation} 1s linear infinite;
`;

export {
    SpinnerContainer,
    DotContainer,
    Dot
}