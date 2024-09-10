import React, { useEffect } from 'react';
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
import { mockLogin } from '../../api/mockAPi';
import { toast } from 'react-toastify';
import { isAuthenticated } from '../../utils/utils';
import {
  DEFAULT_PATH,
  FORGOT_PASSWORD_PATH,
  REGISTER_PATH,
} from '../../utils/path';

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

export const LoginPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(DEFAULT_PATH);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (mockLogin(values.email, values.password)) {
        toast.success('Login successful!', { autoClose: 2000 });
        navigate(DEFAULT_PATH);
      } else {
        toast.error('Invalid credentials!', { autoClose: 2000 });
      }
      setSubmitting(false);
    },
  });

  return (
    <SimpleForm>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={1} alignItems="center">
          <Typography variant="h6">Login to Account</Typography>
          <Typography variant="body1" fontSize="12px" color="text.secondary">
            Please enter your email and password to continue
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
          <Stack direction="row" justifyContent="space-between">
            <FormLabel>Password</FormLabel>
            <Typography variant="subtitle2">
              <Link
                to={FORGOT_PASSWORD_PATH}
                style={{ color: 'rgba(0, 0, 0, 0.87)' }}
              >
                Forgot Password?
              </Link>
            </Typography>
          </Stack>
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign In
        </Button>
        <Typography>
          Don't have an account? <Link to={REGISTER_PATH}>Create Account</Link>
        </Typography>
      </form>
    </SimpleForm>
  );
};
