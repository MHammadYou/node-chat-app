import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AppTitle: React.FC = () => {
  return (
    <Link to="/" state={{ TextDecoder: "none" }}>
      <Typography variant="h5" sx={{ padding: 1 }}>
        Chat App
      </Typography>
    </Link>
  );
};

export default AppTitle;
