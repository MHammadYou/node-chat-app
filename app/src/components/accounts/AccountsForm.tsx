import { Box, Button } from "@mui/material";

import TextField, { FormikType } from "./TextField";
import { FormFieldType } from "./types";

type Props = {
  formik: FormikType;
  fields: FormFieldType[];
  submitText: string;
};

const AccountsForm: React.FC<Props> = ({ formik, fields, submitText }) => {
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        {fields.map(({ label, name, type }) => (
          <TextField
            formik={formik}
            label={label}
            name={name}
            type={type}
            key={name}
          />
        ))}

        <Button type="submit" variant="contained" color="primary">
          {submitText}
        </Button>
      </form>
    </Box>
  );
};

export default AccountsForm;
