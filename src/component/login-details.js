import React from 'react';
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


export default function LoginDetails(props) {
    const { values, handleChange, togglePasswordVisiblity, isPasswordShown, prevStep, nextStep, classes, matches } = props;
    return (
        <React.Fragment>
            <div className="wrapper">
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            Enter Login Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <FormControl className={classes}>
                    <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                    <Input
                        id="standard-adornment-username"
                        type="text"
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                </FormControl>
                <br />
                <FormControl className={classes}>
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
                </FormControl>
                <br />
                <MobileStepper
                    size="large"
                    variant={matches ? "none" : "dots"}
                    steps={3}
                    position="static"
                    activeStep={2}
                    backButton={
                        <Button size="medium" onClick={() => prevStep()} variant="contained" color="secondary">
                            <KeyboardArrowLeft />
                            Previous
                            </Button>
                    }
                    nextButton={
                        <Button size="medium" onClick={() => nextStep()} variant="contained" color="primary" >
                            Next
                                <KeyboardArrowRight />
                        </Button>
                    }
                />
            </div>
        </React.Fragment>
    );
}
