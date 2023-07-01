import { AppBar } from "@mui/material";
import AppTitle from "./AppTitle";

const Nav: React.FC = () => {
  return (
    <AppBar elevation={1} position="static">
      <AppTitle />
    </AppBar>
  );
};

export default Nav;
