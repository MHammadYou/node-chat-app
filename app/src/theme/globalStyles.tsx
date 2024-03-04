import { GlobalStyles } from "@mui/material";

export const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      "::-webkit-scrollbar": {
        width: "0.5rem",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.primary.light,
        borderRadius: "3px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: theme.palette.primary.main,
      },
    })}
  />
);
