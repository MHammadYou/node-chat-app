import { styled, Box, BoxProps, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Nav from "components/nav";

const StyledRoot = styled(Box)<BoxProps>(() => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const Root: React.FC = () => {
  return (
    <StyledRoot>
      <Nav />
      {/* <Container sx={{ height: "100%" }}> */}
      <Outlet />
      {/* </Container> */}
    </StyledRoot>
  );
};

export default Root;
