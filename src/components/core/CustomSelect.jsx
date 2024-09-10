import React from 'react';
import { useField } from 'formik';
import {
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';

export const CustomSelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      sx={{ gap: 1 }}
    >
      <FormLabel>{label}</FormLabel>
      <Select {...field} {...props} value={field.value || ''}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};
