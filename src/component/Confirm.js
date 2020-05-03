import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

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

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values: { firstName, lastName, email, occupation, city, bio, username, password } } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div className="wrapper">
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Confirm
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List >
                        <ListItem>
                            <ListItemText primary="First Name"
                                secondary={firstName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Last Name"
                                secondary={lastName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Email"
                                secondary={email}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Occupation"
                                secondary={occupation}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="City"
                                secondary={city}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Bio"
                                secondary={bio}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Username"
                                secondary={username}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Password"
                                secondary={password}
                            />
                        </ListItem>
                    </List>
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
                    >Confirm & Continue</MyButton>
                </div>
            </ThemeProvider>
        )
    }
}

export default Confirm
