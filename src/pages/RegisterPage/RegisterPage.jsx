import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  Stack,
} from '@mui/material';
import { SimpleForm } from '../../components/SimpleForm';
import { Link, useNavigate } from 'react-router-dom';
import { mockRegister } from '../../api/mockAPi';
import { toast } from 'react-toastify';
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

export const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (mockRegister(values.email, values.userName, values.password)) {
        toast.success('Registration successful!', { autoClose: 2000 });
        navigate(LOGIN_PATH);
      } else {
        toast.error('User already exists!');
      }
      setSubmitting(false);
    },
  });

  return (
    <SimpleForm>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={1} alignItems="center">
          <Typography variant="h6">Register</Typography>
          <Typography variant="body1" fontSize="12px" color="text.secondary">
            Create a account to continue
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
        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField
            id="userName"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
            margin="dense"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Passwrod</FormLabel>
          <TextField
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="dense"
          />
        </FormControl>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Register
        </Button>
        <Typography>
          Already have an account? <Link to={LOGIN_PATH}>Login</Link>
        </Typography>
      </form>
    </SimpleForm>
  );
};
