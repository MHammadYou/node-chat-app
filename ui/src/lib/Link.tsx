import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

const Link: React.FC<Props> = ({ to, children }) => {
  const linkStyles: React.CSSProperties = {
    textDecoration: "none",
  };

  return (
    <RouterLink to={to} style={linkStyles}>
      {children}
    </RouterLink>
  );
};

export default Link;
