/**
 * Created by inerc on 27.09.16.
 */

import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, label, value, type, errors, onChange }) => {
    return (
        <div className={classnames("from-group", { 'has-error': errors })}>
            {errors && <span className="help-block">{errors}</span>}
            <label className="control-lable">{ label }</label>
            <input
                value={ value }
                onChange={onChange}
                type={ type }
                name={ field }
                className="loginIcon"

            />
        </div>
    );
}

TextFieldGroup.propTypes = {
    label: React.PropTypes.string.isRequired,
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    errors: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;