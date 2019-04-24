// eslint-disable-next-line
import React, { Component, Fragment } from 'react'
import './style.css'

/* Fragment 占位符 隐藏组件根标签 */
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleButtonClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变 操作副本 重新赋值
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
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
                    onChange={this.handleInputChange.bind(this)}
                    /><button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                key={index}
                                onClick={this.handleItemDelete.bind(this, index)}
                                >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            
        )
    }
}

export default TodoList;
