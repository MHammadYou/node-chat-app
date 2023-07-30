import { Link } from "lib/";

type Props = {
  to: string;
  children: React.ReactNode;
};

const NavLink: React.FC<Props> = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default NavLink;
