import { styled, Box, BoxProps } from "@mui/material";
import NavLink from "./NavLink";

const StyledNavLinks = styled(Box)<BoxProps>(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
}));

const NavLinks: React.FC = () => {
  return (
    <StyledNavLinks>
      {/* TODO: Add proper routes later */}
      <NavLink to={"signup"}>Signup</NavLink>
      <NavLink to={"login"}>Login</NavLink>
    </StyledNavLinks>
  );
};

export default NavLinks;
