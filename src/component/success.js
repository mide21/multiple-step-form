import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Success() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            Success
                            </Typography>
                    </Toolbar>
                </AppBar>
                <h2>Your Form Has Been Submitted Successfully!!!</h2>
                <p>You will recieve an email from us for further information</p>
            </div>
        </React.Fragment>
    )

}
