import React from 'react';
import EditorStore from '../stores/EditorStore';

class EditorOutput extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {content: ""};
    }
    componentDidMount() {
        EditorStore.addChangeListener(this.onChange);
    }
    onChange() {
        this.setState({content: EditorStore.getContent()});
    }
    getMDContent() {
        return {__html: this.state.content};
    }
    render() {
        return (
            <div>
                <h3>Output</h3>
                <div dangerouslySetInnerHTML={this.getMDContent()}>
                </div>  
            </div>
        );
    }
}
export default EditorOutput;