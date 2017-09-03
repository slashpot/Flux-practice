import AppDispatcher from '../dispatcher/AppDispatcher';
import Remarkable from 'remarkable';
import {TYPING} from '../constants/actionTypes';
import {EventEmitter} from 'events';

var content;

class EditorStoreClass extends EventEmitter {
    addChangeListener(callback) {
        this.on(TYPING, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(TYPING, callback);
    }
    transformToMD(text) {
        var md = new Remarkable();
        content = md.render(text);
    }
    getContent() {
        return content;
    }
}

const EditorStore = new EditorStoreClass();

AppDispatcher.register((action) => {
    switch(action.type) {
        case TYPING:
            EditorStore.transformToMD(action.payload.text);
            EditorStore.emit(TYPING);
            break;
        default:
            return true;
    }
    return true;
});

export default EditorStore;