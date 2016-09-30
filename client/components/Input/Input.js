/**
 * Created by inerc on 29.09.16.
 */
import React from 'react';
import {} from './Input.less';

class Input extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    render () {
        const { type } = this.props;

        return <input type={type} onChange={(e) => { this.onChange(e) }}/>
    }

}

export default Input