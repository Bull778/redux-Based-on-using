// 设定一个reducer

// 初始化值
const initstate = {
  value:"1111"
}
const reducer = (state = initstate,action) =>{
  console.log('reducer',state,action);
  switch (action.type) {
    case 'sendaction':
      // 合并state和action
      return Object.assign({},state,action);

    default:
      return state;
  }
}


module.exports = {
  reducer
}

