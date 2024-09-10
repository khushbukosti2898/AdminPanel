import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Typography,
  Stack,
  FormControl,
  FormLabel,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { SimpleForm } from '../../components/SimpleForm';
import { LOGIN_PATH } from '../../utils/path';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <SimpleForm>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={1} alignItems="center">
          <Typography variant="h6">Forgot your password</Typography>
          <Typography variant="body1" fontSize="12px" color="text.secondary">
            Please enter your email you'd like your password reset information
            sent to
          </Typography>
        </Stack>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <TextField
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="dense"
          />
        </FormControl>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Forgot Password
        </Button>
        <Link to={LOGIN_PATH}>Back to login</Link>
      </form>
    </SimpleForm>
  );
};
