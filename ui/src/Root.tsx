import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Outlet />
    </Box>
  );
};

export default Root;
