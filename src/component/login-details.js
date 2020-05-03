import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
    margin:'40px',
});

const MyFormControl = styled(FormControl)({
    fontSize: '17px',
    marginTop: '60px',
    width: '300px',
});

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

export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange, togglePasswordVisiblity, isPasswordShown } = this.props;
        return (
            <ThemeProvider theme={theme} >
                <div className="wrapper">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Enter Login Details
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <MyFormControl >
                        <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                        <Input
                            id="standard-adornment-username"
                            type="text"
                            value={values.username}
                            onChange={handleChange('username')}
                        />
                    </MyFormControl>
                    <br />
                    <MyFormControl>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={isPasswordShown ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisiblity}
                                    >
                                        {isPasswordShown ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </MyFormControl>
                    <br />
                    <MyButton
                        onClick={this.back}
                        color='secondary'
                        variant="contained"
                    >Previous</MyButton>
                    <MyButton
                        onClick={this.continue}
                        color='primary'
                        variant="contained"
                    >Next</MyButton>
                    <div>
                        <span className="step" />
                        <span className="step" />
                        <span className="step step-o" />
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default PersonalDetails
