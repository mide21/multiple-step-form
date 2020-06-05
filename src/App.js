import React, { Component } from 'react';
import Form from './component/form';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './index.css';

const themePro = createMuiTheme({
  palette: {
    primary: {
      light: '#7c43db',
      main: '#4a148c',
      dark: '#12005e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb2ff',
      main: '#ea80fc',
      dark: '#b64fc8',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '18.75rem',
    [theme.breakpoints.down('xs')]: {
      width: "auto",
    },
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={themePro}>
      <Form classes={classes.root} matches={matches}  />
    </ThemeProvider>
  );
}
