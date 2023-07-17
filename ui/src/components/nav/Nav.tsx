import { AppBar } from "@mui/material";

import AppTitle from "./AppTitle";
import NavLinks from "./NavLinks";

const Nav: React.FC = () => {
  return (
    <AppBar elevation={1} position="static">
      <AppTitle />
      <NavLinks />
    </AppBar>
  );
};

export default Nav;
