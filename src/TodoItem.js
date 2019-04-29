import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    // 当父组件的render执行时，他的子组件的render都会执行
    render() {
        // return <div onClick={this.handleClick}>{this.props.content}</div>
        const {content, test} = this.props // es6 语法 解构赋值
        return (
           <div onClick={this.handleClick}>
            {test}-{content}
           </div> 
        )
    }

    handleClick() {
        // this.props.index
        /* 调用父组件的删除item方法 */
        const {handleItemDelete, index} = this.props; // es6 语法 解构赋值
        handleItemDelete(index)
    }
}

/* 检测props类型 */
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 多种类型
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

/* props 设置默认值 */
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;
