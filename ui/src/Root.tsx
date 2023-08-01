import { styled, Box, BoxProps } from "@mui/material";
import { Outlet } from "react-router-dom";

import Nav from "components/nav";

const StyledRoot = styled(Box)<BoxProps>(() => ({
  height: "100vh",
}));

const Root: React.FC = () => {
  return (
    <StyledRoot>
      <Nav />
      <Outlet />
    </StyledRoot>
  );
};

export default Root;
