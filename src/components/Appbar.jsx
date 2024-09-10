import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Select, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSelector = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
];

export const Appbar = ({ handleDrawerToggle }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          LOGO
        </Typography>
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
