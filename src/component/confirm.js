import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        padding: '10px',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
}));

export default function Confirm(props) {
    const classes = useStyles();
    const { prevStep, nextStep, values: { firstName, lastName, email, occupation, city, bio, username, password } } = props;
    return (
        <React.Fragment>
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
                <div className={classes.root}>
                    <Button
                        onClick={() => prevStep()}
                        color='secondary'
                        variant="contained"
                    >
                        <KeyboardArrowLeft />
                        Previous
                    </Button>
                    <Button
                        onClick={() => nextStep()}
                        color='primary'
                        variant="contained"
                    >
                        Confirm & Continue
                    <KeyboardArrowRight />
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
}
