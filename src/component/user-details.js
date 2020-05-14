import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const MyTextField = styled(TextField)({
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

export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange, } = this.props;
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
                    <MyTextField
                        id="standard-basic"
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <MyTextField
                        id="standard-basic"
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <MyTextField
                        id="standard-basic"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <Stepper
                        size="large"
                        variant="dots"
                        steps={3}
                        position="static"
                        activeStep={0}
                        backButton={
                            <MyButton size="medium" onClick={this.back} variant="contained" color="secondary" disabled>
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
        );
    }
}

export default UserDetails
