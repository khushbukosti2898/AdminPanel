import React from 'react';
import { Stack } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { Appbar } from '../components/Appbar';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Estimations } from '../pages/Estimations/Estimations';
import { DASHBOARD_PATH, ESTIMATES_PATH, PROJECTS_PATH } from '../utils/path';
import { Projects } from '../pages/Projects/Projects';

const drawerWidth = 240;

export const Home = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <div>
      <Appbar handleDrawerToggle={handleDrawerToggle} />
      <Stack
        sx={(theme) => ({
          position: 'relative',
          top: mobileOpen ? '0px' : '64px',
          left: mobileOpen ? '0px' : `${drawerWidth}px`,
          padding: '25px',
          backgroundColor: '#8080800d',
          height: 'calc(100vh - 100px)',
          width: `calc(100vw - ${drawerWidth}px)`,
          [theme.breakpoints.down('sm')]: {
            left: 0,
            width: '100%',
            top: '48px',
            padding: '16px',
          },
        })}
      >
        <Navbar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        />
        <Routes>
          <Route path={DASHBOARD_PATH} element={<Dashboard />} />
          <Route path={PROJECTS_PATH} element={<Projects />} />
          <Route path={ESTIMATES_PATH} element={<Estimations />} />
        </Routes>
      </Stack>
    </div>
  );
};
