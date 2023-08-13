import { styled, Typography, TypographyProps } from "@mui/material";
import { Link } from "lib/index";

const StyledAppTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "0.5rem",
}));

const AppTitle: React.FC = () => {
  return (
    <Link to="/">
      <StyledAppTitle variant="h5">Chat App</StyledAppTitle>
    </Link>
  );
};

export default AppTitle;
