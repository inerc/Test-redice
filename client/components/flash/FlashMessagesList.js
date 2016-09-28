/**
 * Created by inerc on 27.09.16.
 */

import React from 'react';
import { connect } from 'react-redux';
import FlashMessages from './FlashMessages';

class FlashMessagesList extends React.Component {
    render() {
        const messages = this.props.messages.map(messages =>
        <FlashMessages key={messages.id} message={messages} />
        );
        return (
            <div>{ messages }</div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: React.PropTypes.array.isRequired
}

function  mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(FlashMessagesList);
