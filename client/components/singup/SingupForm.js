/**
 * Created by inerc on 23.09.16.
 */

import React from 'react'

class SingupForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>

                <div className="form-group">
                    <label className="control-lable">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="button">
                        Sing Up
                    </button>
                </div>

            </form>
        );
    }
}

export default SingupForm