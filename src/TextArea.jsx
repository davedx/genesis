import React, { Component } from 'react';

export default class TextArea extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return <textarea value={this.state.value} onChange={this.handleChange} />
  }
}