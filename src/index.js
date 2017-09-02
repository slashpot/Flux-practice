import React from 'react';
import ReactDOM from 'react-dom';
import EditorHeader from './components/EditorHeader';
import EditorOutput from './components/EditorOutput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <EditorHeader />
        <EditorOutput />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));