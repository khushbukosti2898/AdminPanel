import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Select, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { drawerWidth } from '../containers/Home';

const LanguageSelector = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
];

export const Appbar = ({ handleDrawerToggle, open }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'white', boxShadow: 'none' }}
    >
      <Toolbar>
        <Typography
          width={drawerWidth}
          color="black"
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          LO
          <Typography
            variant="h4"
            component="span"
            sx={(theme) => ({ color: theme.palette.primary.main })}
          >
            GO
          </Typography>
        </Typography>
        <IconButton
          edge="start"
          onClick={handleDrawerToggle}
          sx={[
            {
              // ml: !open ? 30 : 0,
            },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Stack ml="auto">
          <div>
            <Select
              size="small"
              defaultValue="en"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {LanguageSelector.map((op) => {
                return (
                  <MenuItem value={op.value} key={op.value}>
                    {op.label}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
