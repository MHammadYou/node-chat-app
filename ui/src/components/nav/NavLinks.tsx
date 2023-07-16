import { Box } from "@mui/material";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  return (
    <Box>
      {/* TODO: Add proper routes later */}
      <NavLink to={"signup"}>Signup</NavLink>
      <NavLink to={"login"}>Login</NavLink>
    </Box>
  );
};

export default NavLinks;
