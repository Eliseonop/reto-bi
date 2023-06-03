import React from 'react';
import imagen from '../../../../assets/home1.jpg';
import { Container, ImageWrapper } from './home.sytyles';

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
