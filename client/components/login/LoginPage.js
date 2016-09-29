/**
 * Created by inerc on 23.09.16.
 */
import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignupActions';
import { addFlasMessage } from  '../../actions/flashMessages';

class LoginPage extends React.Component {
    render() {
        const  { userSignupRequest, addFlasMessage } = this.props;
        return (
            <div className="row">
                <div className="Signup">

                    <LoginForm userSignupRequest={ userSignupRequest } />

                </div>
            </div>

        );
    }
}

<<<<<<< HEAD:client/components/login/LoginPage.js
LoginPage.propTypes = {
    userSignupRequest : React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(LoginPage);
=======
SignupPage.propTypes = {
    userSignupRequest : React.PropTypes.func.isRequired,
    addFlasMessage: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlasMessage})(SignupPage);
>>>>>>> d1324554cdef38e6e5b5ad5034bd07e2b0cbdde2:client/components/singup/SignupPage.js


