import AppDispatcher from '../dispatcher/AppDispatcher';
import {TYPING} from '../constants/actionTypes';

export const EditorActions = {
    transformToMD(text) {
        var action = {
            type: TYPING,
            payload: {
                text,
            },
        };
        AppDispatcher.handleAction(action);
    },
};