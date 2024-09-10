import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Grid, Stack } from '@mui/material';
import * as Yup from 'yup';
import { CustomInput } from '../../core/CustomInput';
import { CustomSelect } from '../../core/CustomSelect';
import { PROJECT_STATUS_OPTIONS } from '../../../const/projects';

// Validation schema using Yup
const validationSchema = Yup.object({
  customer: Yup.string().required('Customer is required'),
  refNo: Yup.string().required('Ref No is required'),
  projectName: Yup.string().required('Project Name is required'),
  projectNo: Yup.string().required('Project No is required'),
  areaLocation: Yup.string().required('Area Location is required'),
  address: Yup.string().required('Address is required'),
  dueDate: Yup.date().required('Due Date is required'),
  contact: Yup.string().required('Contact is required'),
  manager: Yup.string().required('Manager is required'),
  staff: Yup.string().required('Staff is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  status: Yup.string().required('Status is required'),
});

export const ProjectForm = ({
  onClose,
  selectedPorject,
  handleProjectSubmit,
  handleDeleteProject,
}) => {
  return (
    <Formik
      initialValues={selectedPorject}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        handleProjectSubmit(values, setSubmitting, setErrors);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack gap={4}>
            <Grid container spacing={3}>
              <Grid item md={4}>
                <CustomInput name="customer" label="Customer" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="refNo" label="Reference No" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="projectName" label="Project Name" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="projectNo" label="Project Number" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="areaLocation" label="Area Location" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="address" label="Address" />
              </Grid>
              <Grid item md={4}>
                <CustomInput
                  type="date"
                  name="dueDate"
                  label="Due Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="contact" label="Contact" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="manager" label="Manager" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="staff" label="Staff" />
              </Grid>
              <Grid item md={4}>
                <CustomInput name="email" label="Email" />
              </Grid>
              <Grid item md={4}>
                <CustomSelect
                  name="status"
                  label="Status"
                  options={PROJECT_STATUS_OPTIONS}
                />
              </Grid>
            </Grid>
            <Stack direction="row" gap={1}>
              <Button
                sx={{ padding: '8px 50px' }}
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {selectedPorject.id ? 'Edit' : 'Add Now'}
              </Button>
              {selectedPorject.id && (
                <Button
                  sx={{ padding: '8px 50px' }}
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeleteProject(selectedPorject.id)}
                >
                  Delete
                </Button>
              )}
              <Button
                sx={{ padding: '8px 50px' }}
                variant="outlined"
                onClick={onClose}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
