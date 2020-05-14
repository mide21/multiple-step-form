import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
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
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const MyFormControl = styled(FormControl)({
    fontSize: 17,
    marginTop: 60,
    width: 300,
});

const MyButton = styled(Button)({
    margin: 40
});

const Stepper = styled(MobileStepper)({
    maxWidth: 500,
    marginLeft: 130,
    backgroundColor: '#f3f3f3'
});


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
        const { values, handleChange, togglePasswordVisiblity, isPasswordShown, } = this.props;
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
                        <Stepper
                            size="large"
                            variant="dots"
                            steps={3}
                            position="static"
                            activeStep={2}
                            backButton={
                                <MyButton size="medium" onClick={this.back} variant="contained" color="secondary">
                                    <KeyboardArrowLeft />
                                    Previous
                            </MyButton>
                            }
                            nextButton={
                                <MyButton size="medium" onClick={this.continue} variant="contained" color="primary" >
                                    Next
                                <KeyboardArrowRight />
                                </MyButton>
                            }
                        />
                </div>
            </ThemeProvider>
                )
            }
        }
        
        export default PersonalDetails
