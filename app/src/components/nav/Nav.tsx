import { styled, AppBar, AppBarProps } from "@mui/material";

import AppTitle from "./AppTitle";
import NavLinks from "./NavLinks";

const StyledNav = styled(AppBar)<AppBarProps>(() => ({
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem",
}));

const Nav: React.FC = () => {
  return (
    <StyledNav elevation={0} position="static">
      <AppTitle />
      <NavLinks />
    </StyledNav>
  );
};

export default Nav;
