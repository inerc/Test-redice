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
            <div className="login">
            <p className="header-logo"></p>
            <p className="visualization">VISUALIZATION</p>
            <form  onSubmit={(e) => { e.preventDefault(); onSubmit(this.getData(e.target)) }}>

                {children}

                <div className="form-group">
                    <button className="button">
                        Login
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