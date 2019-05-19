import * as types from './actionTypes';


export const initListAction = (listArray) => {
    return {
        type: types.INIT_LIST,
        payload: {
            value: listArray
        }
    }
}
