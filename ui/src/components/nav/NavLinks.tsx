import { Box } from "@mui/material";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  return (
    <Box>
      {/* TODO: Add proper routes later */}
      <NavLink to={"signup"} text={"Sign up"} />
      <NavLink to={"login"} text={"Sign up"} />
    </Box>
  );
};

export default NavLinks;
