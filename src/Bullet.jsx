import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Bullet extends Component {
  constructor (props) {
    super(props);
    this.state = {textArea: ''};
    this.addBullet = this.addBullet.bind(this);
  }

  handleChange = (e) => {
    this.setState({textArea: e.target.value});
  }

  addBullet (e) {
    if (this.state.textArea.length > 0) {
      this.props.children.push({text: this.state.textArea, children: []});
      this.setState({status: ''});
    } else {
      this.setState({status: 'Please enter some text'});
    }
  }

  render () {
    let bullets;
    if (this.props.children) {
      bullets = <ul>
        {this.props.children.map((bullet, i) => <li key={i}>
          <Bullet {...bullet} />
        </li>)}
      </ul>
    }

    let status;
    if (this.state.status) {
      status = <span className='alert alert-danger'>{this.state.status}</span>
    }

    return <div>
      <span>{this.props.text}</span>

      {bullets}

      <textarea value={this.state.textArea} onChange={this.handleChange} />
      
      {status}

      <button className='btn btn-success' onClick={this.addBullet}>Add bullet</button>
    </div>
  }
}