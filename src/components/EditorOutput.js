import React from 'react';
import Remarkable from 'remarkable';
import EditorStore from '../stores/EditorStore';

function getInputContent() {
    return EditorStore.getContent();
}

class EditorOutput extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {text: ""};
    }
    componentDidMount() {
        EditorStore.addChangeListener(this.onChange);
    }
    onChange() {
        this.setState({text: getInputContent()});
    }
    getRawMarkup() {
        var md = new Remarkable();
        return { __html: md.render(this.state.text) };
    }

    render() {
        return (
            <div>
                <h3>Output</h3>
                <div dangerouslySetInnerHTML={this.getRawMarkup()}>
                </div>
            </div>
        );
    }
}
export default EditorOutput;