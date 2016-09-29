/**
 * Created by inerc on 23.09.16.
 */
import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignupActions';

class LoginPage extends React.Component {
    render() {
        const  { userSignupRequest } = this.props;
        return (
            <div className="row">
                <div className="Signup">
                    <LoginForm userSignupRequest={ userSignupRequest } />
                </div>
            </div>

        );
    }
}

LoginPage.propTypes = {
    userSignupRequest : React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(LoginPage);


