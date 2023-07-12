import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

const LinkWrapper: React.FC<Props> = ({ to, children }) => {
  const linkStyles: React.CSSProperties = {
    textDecoration: "none",
  };

  return (
    <Link to={to} style={linkStyles}>
      {children}
    </Link>
  );
};

export default LinkWrapper;
