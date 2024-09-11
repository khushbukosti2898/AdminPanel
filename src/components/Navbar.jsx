import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_PATH, ESTIMATES_PATH, PROJECTS_PATH } from '../utils/path';
import LogoutIcon from '@mui/icons-material/Logout';
import { mockLogout } from '../api/mockAPi';

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
  const { window, drawerWidth, open } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const menuLinkClick = (link) => {
    navigate(link);
  };

  const logout = () => {
    mockLogout();
    navigate('/login');
  };

  const drawer = (
    <div>
      <List sx={{ padding: '20px' }}>
        {NAVIGATION_MENU.map((menu) => (
          <ListItem key={menu.id} disablePadding>
            <ListItemButton
              onClick={() => menuLinkClick(menu.link)}
              selected={location.pathname === menu.link}
              sx={{ borderRadius: '5px' }}
            >
              <ListItemIcon
                sx={{
                  svg: {
                    color:
                      location.pathname === menu.link
                        ? 'white'
                        : 'rgba(0, 0, 0, 0.6)',
                  },
                }}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          sx={{ position: 'fixed', bottom: 0, width: `${drawerWidth}px` }}
          disablePadding
        >
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
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
          sx={(theme) => ({
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              marginTop: '64px',
              [theme.breakpoints.down('sm')]: {
                marginTop: '56px',
              },
            },
          })}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
