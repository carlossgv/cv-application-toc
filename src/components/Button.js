import React from 'react';
import { Component } from 'react';

class Button extends Component {

    render() {
        return (
            <button type={this.props.type} form={this.props.type}>{this.props.text}</button>
        )
    }
}

export default Button
