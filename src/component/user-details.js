import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function UserDetails(props) {
    const { values, handleChange, nextStep, classes, matches } = props;
    return (
        <React.Fragment>
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
                        className={classes}
                    />
                    <br />
                    <TextField
                        id="standard-basic"
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        className={classes}
                    />
                    <br />
                    <TextField
                        id="standard-basic"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        className={classes}
                    />
                </form>
                <br />
                <MobileStepper
                    size="large"
                    variant={matches ? "none" : "dots"}
                    steps={3}
                    position="static"
                    activeStep={0}
                    backButton={
                        <Button size="medium" variant="contained" color="secondary" disabled>
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
    )
}
