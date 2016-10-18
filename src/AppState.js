import { observable } from 'mobx';

class AppState {
  @observable root = {
    text: 'Requirements',
    children: []
  };
}

export default AppState;
