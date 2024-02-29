import InputField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";

export type FormikType = {
  values: Record<string, any>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  touched: Record<string, boolean>;
  errors: Record<string, string | undefined>;
};

type Props = {
  formik: FormikType;
  label: string;
  name: string;
  type?: string;
  sx?: SxProps<Theme>;
};

const TextField: React.FC<Props> = ({
  formik,
  label,
  name,
  type = "text",
  sx,
}) => {
  return (
    <InputField
      label={label}
      name={name}
      type={type}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      size="small"
      sx={sx}
    />
  );
};

export default TextField;
