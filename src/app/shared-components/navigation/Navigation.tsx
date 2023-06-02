import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ButtonLink } from "../buttons/Button";
import styled from "styled-components";

import { UserState } from "../../store/slices/user/models/user.state";
import { logout } from "../../store/slices/user/user.slice";
import { IRootState } from "../../store/store";
import { useMediaQuery } from "./useMediaquery";

export function Navigation() {
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const user = useSelector<IRootState, UserState>((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsNavOpen(false);
    }
  }, [isMobile]);

  return (
    <Navbar>
      <Title>Kitchen Display System (KDS)</Title>
      {isMobile && (
        <MenuIcon onClick={toggleNav}>
          <div />
          <div />
          <div />
        </MenuIcon>
      )}
      <ButtonsContainer open={isNavOpen} isMobile={isMobile}>
        {user.isLoggedIn ? (
          <>
            <ButtonLinkCentered to="/tables" onClick={closeNav}>
              Tables
            </ButtonLinkCentered>
            <ButtonLinkCentered to="/orders" onClick={closeNav}>
              Orders
            </ButtonLinkCentered>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <>
            <LoginButton to="/login" onClick={closeNav}>
              Login
            </LoginButton>
            <RegisterButton to="/register" onClick={closeNav}>
              Register
            </RegisterButton>
          </>
        )}
      </ButtonsContainer>
    </Navbar>
  );
}

const Navbar = styled.div`
  background-color: #4682cd;
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
  background-color: transparent;
  border: 1px solid blue;
  &:hover {
    background-color: skyblue;
  }
`;

const LoginButton = styled(ButtonLinkBase)`
  background-color: #2196f3;
`;

const RegisterButton = styled(ButtonLinkBase)`
  background-color: #f44336;
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

export default Navigation;
