import React, { Component } from 'react';
import UserDetails from './user-details';
import PersonalDetails from './personal-details';
import LoginDetails from './login-details';
import Confirm from './confirm';
import Success from './success';

export class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        username: '',
        password: '',
        isPasswordShown: false,
        step: 1
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    render() {
        const { step, isPasswordShown } = this.state;
        const { firstName, lastName, email, occupation, city, bio, username, password } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio, username, password }
        const { classes, matches } = this.props;

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        values={values}
                        handleChange={this.handleChange}
                        classes={classes}
                        matches={matches}
                    />
                )
            case 2:
                return (
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                        handleChange={this.handleChange}
                        classes={classes}
                        matches={matches}
                    />
                )
            case 3:
                return (
                    <LoginDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                        handleChange={this.handleChange}
                        togglePasswordVisiblity={this.togglePasswordVisiblity}
                        isPasswordShown={isPasswordShown}
                        classes={classes}
                        matches={matches}
                    />
                )
            case 4:
                return (
                    <Confirm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 5:
                return <Success />
            default:
                break;
        }
    }
}

export default Form;
