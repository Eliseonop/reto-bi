import styled from "styled-components";

// Estilos para el contenedor principal
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 height: calc(100vh - 100px);
  background-color: #ffffff;
  gap: 50px;
  
`;

// Estilos para la imagen SVG
const ImageWrapper = styled.img`
  width: 500px;
  height: 300px;
`;

export { Container, ImageWrapper };