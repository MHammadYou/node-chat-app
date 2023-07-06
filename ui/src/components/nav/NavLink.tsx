import { Link } from "react-router-dom";

type Props = {
  to: string;
  text: string;
};

const NavLink: React.FC<Props> = ({ to, text }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {text}
    </Link>
  );
};

export default NavLink;
