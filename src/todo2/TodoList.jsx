import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store/index';



class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(store.getState())

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInputChange(e) {
        /* 设置action */
        const action = {
            type: 'input_change',
            value: e.target.value
        }
        /* 将acton 传入store */
        store.dispatch(action);
        /* 获取最新的store里的state 从而更新该组件的state */
        this.setState(store.getState);
    }

    addItem() {
        const action = {
            type: 'add_item',
        }
        store.dispatch(action);
        this.setState(store.getState)
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input
                    placeholder="placeholder"
                    style={{width: 300}}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <Button
                    type="primary"
                    onClick={this.addItem}
                    >提交</Button>
                </div>
                <List
                bordered
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                style={{width: '300px', marginTop: '10px'}}
                >

                </List>
            </div>
        )
    }
}

export default TodoList;
