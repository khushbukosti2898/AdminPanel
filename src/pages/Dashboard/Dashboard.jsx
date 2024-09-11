import React from 'react';
import { Grid, Stack } from '@mui/material';
import { PageHeader } from '../../components/PageHeader';
import { ChartComponent } from '../../components/core/ChartComponent';
import { SummaryCard } from '../../components/Dashboard/SummaryCard';
import { useTranslation } from 'react-i18next';

const lineChartOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};

const barChartOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [10, 52, 200, 334, 390, 330, 220],
      type: 'bar',
    },
  ],
};

const pieChartData = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="15px">
      <PageHeader title={t('dashboard.pageHeader')} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <SummaryCard
            label={t('dashboard.summaryCard.newUsers')}
            value="1,245"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SummaryCard
            label={t('dashboard.summaryCard.newUsers')}
            value="1,245"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SummaryCard
            label={t('dashboard.summaryCard.newUsers')}
            value="1,245"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SummaryCard
            label={t('dashboard.summaryCard.newUsers')}
            value="1,245"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartComponent
            title={t('dashboard.charts.lineChart')}
            options={lineChartOptions}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartComponent
            title={t('dashboard.charts.barChart')}
            options={barChartOptions}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartComponent
            title={t('dashboard.charts.trafficSources')}
            options={pieChartData}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
