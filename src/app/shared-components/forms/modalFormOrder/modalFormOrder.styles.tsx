import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 16px;
 width: 400px;
 margin-bottom: 24px;
padding: 50px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  width: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
    margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
`;
const Select = styled.select`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export {
    ModalContainer,
    ModalContent,
    CloseButton,
    CloseIcon,
    Form,
    Input,
    ButtonContainer,
    Button,
    Select
};