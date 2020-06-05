import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function PersonalDetails(props) {
    const { values, handleChange, prevStep, nextStep, classes, matches } = props;
    return (
        <React.Fragment>
            <div className="wrapper">
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            Enter Personal Details
                    </Typography>
                    </Toolbar>
                </AppBar>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        className={classes}
                    />
                    <br />
                    <TextField
                        id="standard-basic"
                        label="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        className={classes}
                    />
                    <br />
                    <TextField
                        id="standard-basic"
                        label="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                        className={classes}
                    />
                </form>
                <br />
                <MobileStepper
                    size="large"
                    variant={matches ? "none" : "dots"}
                    steps={3}
                    position="static"
                    activeStep={1}
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
    )
}
