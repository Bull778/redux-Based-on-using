import React, { Component } from 'react';

import store from '../../store';

import { sendAction } from '../../action';

export default class home extends Component {

  handle = () =>{
    const action = sendAction();
    // 发送action
    store.dispatch(action);
  }

  componentDidMount(){
    // 监听store
    store.subscribe(() =>{
      console.log('store.subscribe',store.getState())
      // 触发render函数
      this.setState({})
    })
  }

  render() {
    return (
      <div>
        <div>{store.getState().value}</div>
        <button onClick={this.handle}>点我</button>
      </div>
    )
  }
}
