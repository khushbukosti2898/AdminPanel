import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card, Typography } from '@mui/material';

export const ChartComponent = ({ title, options }) => {
  return (
    <Card sx={{ padding: '20px', margin: '10px' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ReactECharts
        option={options}
        style={{ height: '400px', width: '100%' }}
      />
    </Card>
  );
};
