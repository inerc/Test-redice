/**
 * Created by inerc on 27.09.16.
 */

import React from 'react';
import  Input from '../Input/Input';

const Field = ({ name, value, type, errors, placeholder }) => {
    return (
        <div className={'from-group'}>
            {errors && <span className="help-block">{errors}</span>}
            <Input
                type={ type }
                name={ name }
                className="loginIcon"
                placeholder= { placeholder }

            />
        </div>


    );
};



Field.propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    errors: React.PropTypes.string,
};

Field.defaultProps = {
    type: 'text'
};



export default Field;