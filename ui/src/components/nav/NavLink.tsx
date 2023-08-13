import { styled, Typography, TypographyProps } from "@mui/material";
import { Link } from "lib/index";

type Props = {
  to: string;
  children: string;
};

const StyledNavLink = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "0 0.5rem",
  textTransform: "capitalize",
}));

const NavLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link to={to}>
      <StyledNavLink>{children}</StyledNavLink>
    </Link>
  );
};

export default NavLink;
