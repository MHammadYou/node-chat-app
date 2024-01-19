import { styled, Box, BoxProps } from "@mui/material";

import useAuth from "hooks/useAuth";

import NavLink from "./NavLink";
import ROUTES from "constants/routes";

const StyledNavLinks = styled(Box)<BoxProps>(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
}));

const NavLinks: React.FC = () => {
  const isUserAuthenticated = useAuth();

  return (
    <StyledNavLinks>
      {isUserAuthenticated ? (
        <>
          <NavLink to={ROUTES.logout}>Logout</NavLink>
        </>
      ) : (
        <>
          <NavLink to={ROUTES.signup}>Signup</NavLink>
          <NavLink to={ROUTES.login}>Login</NavLink>
        </>
      )}
    </StyledNavLinks>
  );
};

export default NavLinks;
