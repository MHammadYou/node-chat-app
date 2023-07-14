import { Link } from "../../lib";

type Props = {
  to: string;
  text: string;
};

const NavLink: React.FC<Props> = ({ to, text }) => {
  return <Link to={to}>{text}</Link>;
};

export default NavLink;
