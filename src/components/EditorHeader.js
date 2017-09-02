import React from 'react';
import {EditorActions} from '../actions/editorActions';

class EditorHeader extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        EditorActions.transformToMD(event.target.value);
    }

    render() {
        return (
            <div>
                <h3>MarkDown Editor</h3>
                <textarea onChange = {this.onChange} />
            </div>
        );
    }
}
export default EditorHeader;