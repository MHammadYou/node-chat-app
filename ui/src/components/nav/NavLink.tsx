import { Typography } from "@mui/material";
import { Link } from "lib/";

type Props = {
  to: string;
  children: string;
};

const NavLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link to={to}>
      <Typography>{children}</Typography>
    </Link>
  );
};

export default NavLink;
