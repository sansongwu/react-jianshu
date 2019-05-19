import * as types from './actionTypes';

const defaultState = {
    inputValue: 'default value',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === 'input_change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState;
    }

    if (action.type === types.INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.payload.value;
        return newState;
    }

    return state;
}