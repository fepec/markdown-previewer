import React from "react"
import EditorWindow from "./components/EditorWindow"
import PreviewWindow from "./components/PreviewWindow"



const defaultText = 'Hello Zuri'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: defaultText
        };
        this.handleChange = this.handleChange.bind(this)
    };

    // State

    // handlers
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    // renders
    render() {
        return (
            <>
                <h1>fepec's markdown previewer</h1>
                <EditorWindow handleChange={this.handleChange} text={this.state.text} />
                <PreviewWindow text={this.state.text} />
            </>
        );
    }
}