import React, { Component } from 'react';
import UserDetails from './user-details';
import PersonalDetails from './personal-details';
import LoginDetails from './login-details';
import Confirm from './Confirm';
import Success from './success';

export class Form extends Component {
    state = {
        isPasswordShown: false,
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        username: '',
        password: ''
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


        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        values={values}
                        handleChange={this.handleChange}
                    />
                )
            case 2:
                return (
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                        handleChange={this.handleChange}
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
