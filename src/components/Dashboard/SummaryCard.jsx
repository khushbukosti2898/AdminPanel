import React from 'react';
import { Card, Stack, Typography } from '@mui/material';

export const SummaryCard = ({ label, value }) => {
  return (
    <Card sx={{ padding: '20px' }}>
      <Stack direction="column" spacing={1}>
        <Typography variant="h6" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </Stack>
    </Card>
  );
};
