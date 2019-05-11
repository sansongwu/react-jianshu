// eslint-disable-next-line
import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import TodoTest from './TodoTest';

let testNumber = 0
// setInterval(() => {
//   testNumber++
//   // console.log(testNumber)
// }, 1000)

/* Fragment 占位符 隐藏组件根标签 */
class TodoList extends Component {
    constructor(props) {
        super(props);
        // 当组件的props state 发生改变的时候， render函数就会重新执行。
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleTestNumber() {
      setInterval(() => {
        testNumber++
        // console.log(testNumber)
        return <TodoTest testNumber={testNumber}/>;
      }, 1000)
    }

    handleInputChange(e) {
      const value = e.target.value
      /* 异步修改state */
      /* 为什么要使用异步setState呢??? */
        this.setState(() => ({
          inputValue: value
        }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleButtonClick() {
      /* 接受prevState参数 修改前的state */
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }

    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变 操作副本 重新赋值
        // const list = [...this.state.list]
        // list.splice(index, 1) // splice 返回被删除的项 改变原有数组
        // this.setState({
        //     list
        // })

        this.setState((prevState) => {
          const list = [...prevState.list];
          list.splice(index, 1);
          return {list}
        })
    }

    getTodoItem() {
      return this.state.list.map((item, index) => {
        return (
            <TodoItem
              content={item}
              index={index}
              handleItemDelete={this.handleItemDelete}
              key={index}
            />
        )
    })
    }

    render() {
        return (
            <div>
                {/* JSX注释 */}
                {
                    // 注释2
                }
                <div>
                    <label htmlFor='insertArea'>输入内容</label>
                    <input
                    id='insertArea'
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    /><button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                {/* <TodoTest testNumber={this.state.inputValue}/> */}
                {/* <TodoTest testNumber={testNumber}/> 这样不行 number变 数据加的是快照 */}
                {this.handleTestNumber()}
            </div>
        )
    }
}

export default TodoList;
