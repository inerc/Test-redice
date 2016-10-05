/**
 * Created by inerc on 29.09.16.
 */
import React from 'react';
import {} from './Input.less';

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value})
    }

    render () {
        const { type } = this.props;

        return <input type={type}
                      value={this.state.value}
                      onChange={(e) => { this.onChange(e) }}
                      name={this.props.name}
                />
    }

}

export default Input