import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Bullet from './Bullet';

@observer
class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Bullet {...this.props.appState.root} />
        <DevTools />
      </div>
    );
  }
};

export default App;
