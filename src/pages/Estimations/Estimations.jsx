import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { EstimateForm } from '../../components/Estimates/EstimatesForm/EstimateForm';

export const Estimations = () => {
  const [openEstimateFormModal, setOpenEstimateFormModal] = useState(false);

  const buttonClickAction = () => {
    setOpenEstimateFormModal(true);
  };

  const closeForm = () => {
    setOpenEstimateFormModal(false);
  };

  return (
    <Stack gap="15px">
      <PageHeader
        title="Estimates"
        buttonTitle="Add Estimate"
        buttonClickAction={buttonClickAction}
        showButton={!openEstimateFormModal}
      />

      {openEstimateFormModal && <EstimateForm closeForm={closeForm} />}
    </Stack>
  );
};
