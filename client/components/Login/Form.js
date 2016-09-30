/**
 * Created by inerc on 23.09.16.
 */

import React from 'react';
import {} from './Login.less';

class Form extends React.Component {

    constructor (props) {
        super(props);
    }


    render() {
        let { children } = this.props;

        if (!Array.isArray(children)) {
            children = [children];
        }

        return (
            <div className="login">
            <p className="header-logo"></p>
            <p className="visualization">VISUALIZATION</p>
            <form  onSubmit={(e) => { this.onSubmit(e) }}>
                <h1>Вход в систему</h1>

                {children}

                <div className="form-group">
                    <button className="button">
                        Sing Up
                    </button>
                </div>

            </form>
            </div>
        );
    }
}

Form.PropTypes = {
    onSubmit: React.PropTypes.func.isRequired

};

export default Form;