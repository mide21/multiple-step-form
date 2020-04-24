import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={theme} >
                <div className="wrapper">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Enter User Details
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="standard-basic"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            className="input"
                        />
                        <br />
                        <TextField
                            id="standard-basic"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            className="input"
                        />
                        <br />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            className="input"
                        />
                        <br />
                        <Button
                            onClick={this.continue}
                            color='primary'
                            className="btn"
                            variant="contained"
                        >Next</Button>
                    </form>
                    <div>
                        <span className="step step-o" />
                        <span className="step" />
                        <span className="step" />
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default UserDetails