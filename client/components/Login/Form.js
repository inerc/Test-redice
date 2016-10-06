/**
 * Created by inerc on 23.09.16.
 */

import React from 'react';
import {} from './Login.less';

class Form extends React.Component {

    constructor (props) {
        super(props);
    }

    getData (form) {
        let elements = form.elements;
        let data = {};

        Object.keys(elements).forEach((key) => {
            let element = elements[key];

            data[element.name] = element.value;
        });

        return data;
    }


    render() {
        let { children, onSubmit = () => {} } = this.props;

        if (!Array.isArray(children)) {
            children = [children];
        }



        return (
            <div className="login-page">
                <div className="container">
                    <div className="login">
                        <div className="row"></div>
                        <div className="col-md-4 col-xs-4"></div>
                        <div className="col-md-4 col-xs-12">
                            <div className="row">
                                <div className="col-md-12 col-xs-12 ">
                                    <p className="header-logo"></p>
                                    <p className="visualization">VISUALIZATION</p>
                                </div>
                            </div>
                            <form  onSubmit={(e) => { e.preventDefault(); onSubmit(this.getData(e.target)) }}>
                                <div className="row">
                                    <div className="member-login">Вход в систему</div>
                                </div>
                                {children}
                                <div className="row">
                                    <div className="forgot-password">
                                        <div className="col-md-12 col-xs-12">
                                            <div className="forgot-password-left text-center" >
                                                <input className="forgot-password-input" type="checkbox"></input>
                                                <label htmlFor="checkbox">Чужой компьютер</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-xs-12">
                                            <div className=" forgot-password-text text-center ">
                                                <a href="mailto:mail@test.ru">Забыли пароль?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <button className="btn-cloudy button">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-xs-4"></div>
                    </div>
                </div>
            </div>

        );
    }
}

Form.PropTypes = {
    onSubmit: React.PropTypes.func.isRequired

};

export default Form;