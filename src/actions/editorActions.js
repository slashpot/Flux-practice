import AppDispatcher from '../dispatcher/AppDispatcher';
import {TYPE} from '../constants/actionTypes';

export const EditorActions = {
    transformToMD(text) {
        AppDispatcher.handleAction({
            type: TYPE,
            payload: {
                text,
            },
        });
    },
};