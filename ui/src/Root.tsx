import { styled, Box, BoxProps } from "@mui/material";
import { Outlet } from "react-router-dom";

const StyledRoot = styled(Box)<BoxProps>(() => ({
  height: "100vh",
}));

const Root: React.FC = () => {
  return (
    <StyledRoot>
      <Outlet />
    </StyledRoot>
  );
};

export default Root;
