/**
 * Created by inerc on 23.09.16.
 */
import React from 'react';
import Form from '../components/Login/Form';
import Field from '../components/Login/Field';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
    render() {
        const  { userSignupRequest, addFlashMessage, errors = {} } = this.props;
        return (
            <div className="row">
                <div className="Signup">

                    <Form onSubmit={ userSignupRequest }>
                        <Field
                            errors={ errors.username }
                            name="username"
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

export default connect(mapStateToProps, { userSignupRequest: () => {}, addFlashMessage: () => {} })(LoginPage);



