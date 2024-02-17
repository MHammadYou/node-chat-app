import { Box, Button, Typography } from "@mui/material";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Box>
      <Typography>{error.message}</Typography>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Box>
  );
};

export default ErrorFallback;
