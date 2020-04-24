import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
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
