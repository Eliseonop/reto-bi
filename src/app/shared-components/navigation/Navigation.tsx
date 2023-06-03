import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  ContainerButtons,
  Navbar,
  Title,
  ButtonsContainer,
  ButtonLinkCentered,
  LoginButton,
  RegisterButton,
  LogoutButton,
  MenuIcon
} from "./navigation.styles";
import { UserState } from "../../store/slices/user/models/user.state";
import { logout } from "../../store/slices/user/user.slice";
import { IRootState } from "../../store/store";
import { useMediaQuery } from "../../utils/functions/useMediaquery";

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
        {user.user.isLoggedIn ? (
          <ContainerButtons>
            <div>
              <ButtonLinkCentered to="/tables" onClick={closeNav}>
                Mesas
              </ButtonLinkCentered>
              <ButtonLinkCentered to="/orders" onClick={closeNav}>
                Orders
              </ButtonLinkCentered>
            </div>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </ContainerButtons>
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

export default Navigation;
