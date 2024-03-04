import {
  styled,
  Box,
  BoxProps,
  Button,
  Typography,
  TypographyProps,
} from "@mui/material";

import TextField, { FormikType } from "lib/TextField";
import { FormFieldType } from "./types";
import React from "react";

type Props = {
  formik: FormikType;
  fields: FormFieldType[];
  formTitle: string;
  submitText: string;
};

const StyledAccountsForm = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledFormTitle = styled(Typography)<TypographyProps>(() => ({
  textAlign: "center",
  marginBottom: "0.5rem",
}));

const AccountsForm: React.FC<Props> = ({
  formik,
  fields,
  formTitle,
  submitText,
}) => {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "320px",
  };

  return (
    <StyledAccountsForm>
      <form onSubmit={formik.handleSubmit} style={styles}>
        <StyledFormTitle variant="h5">{formTitle}</StyledFormTitle>
        {fields.map(({ label, name, type }) => (
          <TextField
            formik={formik}
            label={label}
            name={name}
            type={type}
            key={name}
            sx={{ m: 1 }}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
        >
          {submitText}
        </Button>
      </form>
    </StyledAccountsForm>
  );
};

export default AccountsForm;
