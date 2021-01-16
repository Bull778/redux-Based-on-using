# redux的基础使用
redex全局状态管理

## Store

**Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。Redux 提**
**供createStore这个函数，用来生成 Store。**
```js
//  createStore函数接受另一个函数作为参数，返回新生成的 Store 对象
import { createStore } from 'redux';

const store = createStore(reducer);


// store.dispatch()是 View 发出 Action 的唯一方法
store.dispatch({
  type: 'send_action',
  payload: 'Redux'
  });
```

##  State
**Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。**

**当前时刻的 State，可以通过store.getState()拿到。**

```js
import { createStore } from 'redux';
const store = createStore(reducer);

// 可以在组件挂载完成后
componentDidMount(){
    // 监听store
    store.subscribe(() =>{
      console.log('store.subscribe',store.getState())
      // 触发render函数
      this.setState({})
    })
  }


// 获取值
const state = store.getState();
```

**Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。**
## Action
**State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。**
**Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置。**
```js

// 设定一个action
const sendAction = () =>{
  return{
    type:'sendaction',
    value:"6666"
  }
}
module.exports = {
  sendAction
}

```
## Reducer
**Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。**
**Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。**
```js

// 设定一个reducer
// 初始化值
const initstate = {
  value:"1111"
}
const reducer = (state = initstate,action) =>{
  console.log('reducer',state,action);
  switch (action.type) {
    case 'sendaction':
      // 合并state和action
      return Object.assign({},state,action);
    default:
      return state;
  }
}
module.exports = {
  reducer
}


```
