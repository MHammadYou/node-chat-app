import InputField from "@mui/material/TextField";

type Props = {
  formik: {
    values: Record<string, any>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    touched: Record<string, boolean>;
    errors: Record<string, string | undefined>;
  };
  label: string;
  name: string;
  type?: string;
};

const TextField: React.FC<Props> = ({ formik, label, name, type = "text" }) => {
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
    />
  );
};

export default TextField;
