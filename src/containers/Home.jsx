import React from 'react';
import { Stack } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { Appbar } from '../components/Appbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Estimations } from '../pages/Estimations/Estimations';
import { DASHBOARD_PATH, ESTIMATES_PATH, PROJECTS_PATH } from '../utils/path';
import { Projects } from '../pages/Projects/Projects';

export const drawerWidth = 240;

export const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Appbar handleDrawerToggle={handleDrawerToggle} open={open} />
      <Stack
        top="64px"
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            top: '56px',
          },
        })}
      >
        <Navbar
          drawerWidth={drawerWidth}
          handleDrawerClose={handleDrawerToggle}
          open={open}
        />
      </Stack>
      <Stack
        sx={(theme) => ({
          position: 'relative',
          top: '64px',
          padding: '25px',
          backgroundColor: '#8080800d',
          height: 'calc(100vh - 100px)',
          width: open ? `calc(100vw - ${drawerWidth}px)` : '100%',
          left: open ? `${drawerWidth}px` : '0',
          overflowX: 'hidden',
          [theme.breakpoints.down('sm')]: {
            left: 0,
            width: '100%',
            top: '56px',
            padding: '16px',
          },
        })}
      >
        <Stack sx={{ top: '64px' }}>
          <Routes>
            <Route path={DASHBOARD_PATH} element={<Dashboard />} />
            <Route path={PROJECTS_PATH} element={<Projects />} />
            <Route path={ESTIMATES_PATH} element={<Estimations />} />
          </Routes>
        </Stack>
      </Stack>
    </div>
  );
};
