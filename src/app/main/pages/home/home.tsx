import React from 'react';
import styled from 'styled-components';
import imagen from '../../../../assets/home1.jpg';
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

// Componente de Inicio
const Home: React.FC = () => {
    return (
        <Container>
            <h1>Bienvenido al sistema KDS</h1>
            <ImageWrapper
                src={imagen} alt="Imagen SVG"
            >

            </ImageWrapper>

        </Container>
    );
};

export default Home;
