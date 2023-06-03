import styled from "styled-components";



const Form = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 10px;
  }
`;


const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  height: calc(100vh - 140px);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 2px;
`;

export { Form, Container, Input, Button, Error };