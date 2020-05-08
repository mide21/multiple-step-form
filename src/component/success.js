import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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

export class Success extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="wrapper">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Success
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <h2>Your Form Has Been Submitted Successfully!!!</h2>
                    <p>You will recieve an email from us for further information</p>
                </div>
            </ThemeProvider>
        )
    }
}

export default Success
