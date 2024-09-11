import * as Yup from 'yup';
import { Button, Card, Divider, Stack, Typography } from '@mui/material';
import { FieldArray, Form, Formik } from 'formik';
import { Section } from './Section';
import { initialSection } from '../../../const/estimate';
import {
  calculateBaseTotal,
  calculateTotalMargin,
} from '../../../services/estimations';

const validationSchema = Yup.object({
  sections: Yup.array().of(
    Yup.object({
      name: Yup.string().required('Section name is required'),
      total: Yup.number().required('Section total is required').min(0),
      items: Yup.array().of(
        Yup.object({
          title: Yup.string().required('Title is required'),
          description: Yup.string().required('Description is required'),
          unit: Yup.string().required('Unit is required'),
          quantity: Yup.number().required('Quantity is required').min(0),
          price: Yup.number().required('Price is required').min(0),
          margin: Yup.number().required('Margin is required').min(0).max(100),
        })
      ),
    })
  ),
});

export const EstimateForm = ({ closeForm }) => {
  return (
    <Formik
      initialValues={{
        sections: initialSection,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form values:', values);
        closeForm();
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <Card
            sx={{
              padding: '15px',
              borderRadius: '0',
              gap: '50px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <FieldArray name="sections">
              {({ push }) => (
                <Stack gap={5}>
                  {values.sections.map((section, index) => (
                    <Section
                      key={index}
                      index={index}
                      section={section}
                      pushSection={push}
                      setFieldValue={setFieldValue}
                    />
                  ))}
                  {Object.keys(touched).length && Object.keys(errors).length ? (
                    <Typography sx={{ paddingLeft: '40px' }} color="error">
                      Enter required details
                    </Typography>
                  ) : (
                    <></>
                  )}
                </Stack>
              )}
            </FieldArray>
            <Stack alignItems="end" sx={{ marginLeft: 'auto' }}>
              <Divider width="300px" />
              <Stack
                direction="row"
                gap={15}
                justifyContent="space-between"
                width="300px"
                padding="10px"
              >
                <Typography color="text.secondary">Sub Total</Typography>
                <Typography color="text.secondary">
                  {calculateBaseTotal(values.sections)}
                </Typography>
              </Stack>
              <Divider width="300px" />
              <Stack
                direction="row"
                gap={15}
                justifyContent="space-between"
                width="300px"
                padding="10px"
              >
                <Typography color="text.secondary">Total Margin</Typography>
                <Typography color="text.secondary">
                  {calculateTotalMargin(values.sections)}
                </Typography>
              </Stack>
              <Divider width="300px" />
              <Stack
                direction="row"
                gap={15}
                justifyContent="space-between"
                width="300px"
                padding="10px"
              >
                <Typography fontWeight="bold">Total Amount</Typography>
                <Typography fontWeight="bold">
                  {calculateBaseTotal(values.sections) +
                    calculateTotalMargin(values.sections)}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap="20px" justifyContent="end">
              <Button variant="outlined" onClick={() => closeForm()}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Stack>
          </Card>
        </Form>
      )}
    </Formik>
  );
};
