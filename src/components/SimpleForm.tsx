import React from 'react';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import Paper from '@mui/material/Paper';
import { Stack, useTheme } from '@mui/system';
import { createGlobalStyle } from 'styled-components';
import { Container } from '@mui/material';

const useStyles = (theme) => ({
  root: css({
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  formClass: css({
    padding: '60px 30px',
    borderRadius: '30px!important',

    form: {
      width: '380px',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
  }),
  containerClass: css({}),
  markLogo: css({
    position: 'absolute',
    top: '68px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
});

export const fromStyles = (theme: Theme) => ({
  fieldClass: css({
    backgroundColor: 'white',
  }),
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4880FF;
}
`;

export const fieldClass = css`
  background-color: white;
`;

export const SimpleForm = ({ children, isUpgraded = false }) => {
  const classes = useStyles(useTheme());
  return (
    <Stack className={classes.root}>
      <GlobalStyle />
      <Stack
        className={classes.containerClass}
        justifyContent="center"
        flexDirection="column"
        gap="70px"
        alignItems="center"
      >
        <Paper elevation={isUpgraded ? 8 : 1} className={classes.formClass}>
          {children}
        </Paper>
      </Stack>
    </Stack>
  );
};
