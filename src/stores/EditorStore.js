import AppDispatcher from '../dispatcher/AppDispatcher';
import {TYPE} from '../constants/actionTypes';
import {EventEmitter} from 'events';

const store = {
    content: '',
};

class EditorStoreClass extends EventEmitter {
    addChangeListener(callback) {
        this.on(TYPE, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(TYPE, callback);
    }
    getContent() {
        return store.content;
    }
}

const EditorStore = new EditorStoreClass();

AppDispatcher.register((action) => {
    switch(action.type) {
        case TYPE:
            store.content = action.payload.text;
            EditorStore.emit(TYPE);
            break;
        default:
            return true;
    }
    return true;
});

export default EditorStore;