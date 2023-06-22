import { styled, Box, BoxProps, CircularProgress } from "@mui/material";

const StyledLoading = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <CircularProgress />
    </StyledLoading>
  );
};

export default Loading;
