import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

const MyTextField = styled(TextField)({
    fontSize: '17px',
    marginTop: '60px',
    width: '300px',
});

const MyButton = styled(Button)({
    margin: '40px',
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
            light: '53ff1a',
            main: '#2db300',
            dark: '#1a6600',
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
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={theme} >
                <div className="wrapper">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Enter Personal Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <form noValidate autoComplete="off">
                        <MyTextField
                            id="standard-basic"
                            label="Occupation"
                            onChange={handleChange('occupation')}
                            defaultValue={values.occupation}
                        />
                        <br />
                        <MyTextField
                            id="standard-basic"
                            label="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                        />
                        <br />
                        <MyTextField
                            id="standard-basic"
                            label="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                        />
                        <br />
                        <MyButton
                            onClick={this.back}
                            color='secondary'
                            className="btn"
                            variant="contained"
                        >Previous</MyButton>
                        <MyButton
                            onClick={this.continue}
                            color='primary'
                            className="btn"
                            variant="contained"
                        >Next</MyButton>
                    </form>
                    <div>
                        <span className="step" />
                        <span className="step step-o" />
                        <span className="step" />
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default PersonalDetails
