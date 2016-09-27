/**
 * Created by inerc on 23.09.16.
 */
import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignupActions';
import { addFlasMessage } from  '../../actions/flashMessages';

class SignupPage extends React.Component {
    render() {
        const  { userSignupRequest, addFlasMessage } = this.props;
        return (
            <div className="row">
                <div className="Signup">
                    <SignupForm userSignupRequest={ userSignupRequest } addFlasMessage={ addFlasMessage } />
                </div>
            </div>

        );
    }
}

SignupPage.propTypes = {
    userSignupRequest : React.PropTypes.func.isRequired,
    addFlasMessage: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlasMessage})(SignupPage);


