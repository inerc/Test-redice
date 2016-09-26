/**
 * Created by inerc on 23.09.16.
 */

import React from 'react';
import classnames from 'classnames'

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

    onSubmit(e) {
        this.setState({ errors: {} });
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true})
        this.props.userSignupRequest(this.state).then(
            () => {},
            (err) => this.setState({ errors: err.response.data, isLoading: false })
        );
    }

    render() {
        const  { errors } = this.state;
        return (
            <div className="login">
            <p className="header-logo"></p>
            <p className="visualization">VISUALIZATION</p>
            <form  onSubmit={this.onSubmit}>
                <h1>Join our community</h1>

                <div className={classnames("from-group", { 'has-error': errors.username })}>
                    {errors.username && <span className="help-block">{errors.username}</span>}
                    <label className="control-lable">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="loginIcon"

                    />
                </div>
                <div className={classnames("from-group", { 'has-error': errors.username })}>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                    <label className="control-lable">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="loginIcon"
                    />

                </div>

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
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm