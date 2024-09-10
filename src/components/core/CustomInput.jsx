import React from 'react';
import { useField } from 'formik';
import { TextField, FormControl, FormLabel } from '@mui/material'; // Added imports for FormControl and FormLabel

export const CustomInput = ({ label, showErrorMsg = true, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl fullWidth={props.fullWidth ?? true} sx={{ gap: 1 }}>
      {label && <FormLabel>{label}</FormLabel>}
      <TextField
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={showErrorMsg && meta.touched && meta.error}
      />
    </FormControl>
  );
};
