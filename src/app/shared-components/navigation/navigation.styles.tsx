import styled from "styled-components";
import { ButtonLink } from "../buttons/Button";

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
`;

const Navbar = styled.div`
  background-color: #0284c7;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div<{ open: boolean; isMobile: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ open, isMobile }) =>
        isMobile ? "column" : open ? "column" : "row"};
  margin-top: ${({ isMobile }) => (isMobile ? "10px" : 0)};
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-center;
    gap: 20px;
    width: 100%;
  }
`;

const ButtonLinkBase = styled(ButtonLink)`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const ButtonLinkCentered = styled(ButtonLinkBase)`
  margin: 0 5px;
  background-color: #14b8a6;
  filter: box-shadow(0 0 0 0 blue);
  border: 1px solid black;
  &:hover {
    background-color: skyblue;
  }
`;

const LoginButton = styled(ButtonLinkBase)`
  background-color: #2196f3;
`;

const RegisterButton = styled(ButtonLinkBase)`

    background-color: #3f51b5;
`;

const LogoutButton = styled.button`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 15px 20px;
  font-weight: bold;
  margin: 0 5px;
  text-decoration: none;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  border: 1px solid blue;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 20px;
    right: 20px;
    div {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin-bottom: 4px;
      border-radius: 2px;
    }
  }
`;


export {
    ContainerButtons,
    Navbar,
    Title,
    ButtonsContainer,
    ButtonLinkBase,
    ButtonLinkCentered,
    LoginButton,
    RegisterButton,
    LogoutButton,
    MenuIcon
}