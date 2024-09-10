import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_PATH, ESTIMATES_PATH, PROJECTS_PATH } from '../utils/path';

export const NAVIGATION_MENU = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
    link: DEFAULT_PATH,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <AppsIcon />,
    link: PROJECTS_PATH,
  },
  {
    id: 'estimates',
    label: 'Estimates',
    icon: <LocalAtmIcon />,
    link: ESTIMATES_PATH,
  },
];

export const Navbar = (props) => {
  const {
    window,
    drawerWidth,
    mobileOpen,
    handleDrawerClose,
    handleDrawerTransitionEnd,
  } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const menuLinkClick = (link) => {
    navigate(link);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {NAVIGATION_MENU.map((menu) => (
          <ListItem key={menu.id} disablePadding>
            <ListItemButton
              onClick={() => menuLinkClick(menu.link)}
              selected={location.pathname === menu.link}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
