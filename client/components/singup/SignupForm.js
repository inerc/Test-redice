/**
 * Created by inerc on 23.09.16.
 */

import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { browserHistory } from 'react-router';

class SignupForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid){
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()){
        this.setState({ errors: {}, isLoading: true});
        this.props.userSignupRequest(this.state).then(
            () => {
                this.props.addFlasMessage({
                    type: 'success',
                    text: 'You signed up successfuly. Welcome!'
                });
                this.context.router.push('/');
            },
            (err) => this.setState({ errors: err.response.data, isLoading: false })
            );
        }
    }

    render() {
        const  { errors } = this.state;
        return (
            <div className="login">
            <p className="header-logo"></p>
            <p className="visualization">VISUALIZATION</p>
            <form  onSubmit={this.onSubmit}>
                <h1>Join our community</h1>

                <TextFieldGroup
                        errors={ errors.username }
                        label= "Username"
                        value={this.state.username}
                        onChange={this.onChange}
                        field="username"

                />
                <TextFieldGroup
                    errors= { errors.password }
                    label= "Password"
                    value= {this.state.password}
                    onChange= {this.onChange}
                    field="password"
                    type="password"
                />

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="button">
                        Sing Up
                    </button>
                </div>

            </form>
            </div>
        );
    }
}

SignupForm.PropTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlasMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SignupForm