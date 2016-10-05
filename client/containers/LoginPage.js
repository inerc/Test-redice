/**
 * Created by inerc on 23.09.16.
 */
import React from 'react';
import Form from '../components/Login/Form';
import Field from '../components/Login/Field';
import { connect } from 'react-redux';
import { authRequest } from '../actions/auth';

class LoginPage extends React.Component {
    render() {
        const  { authRequest, errors = {} } = this.props;
        return (
            <div className="row">
                <div className="Signup">
                    <Form onSubmit={ authRequest }>
                        <Field
                            info = "Вход в систему"
                            errors={ errors.username }
                            name="login"
                            placeholder = "Логин"

                        />
                        <Field
                            errors= { errors.password }
                            name="password"
                            type="password"
                            placeholder = "Пароль"
                        />
                    </Form>

                </div>
            </div>

        );
    }
}


LoginPage.propTypes = {
    userSignupRequest : React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { userSignupRequest: () => {}, authRequest })(LoginPage);



