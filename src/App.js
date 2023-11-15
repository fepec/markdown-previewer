import React from "react"
import EditorWindow from "./components/EditorWindow"
import PreviewWindow from "./components/PreviewWindow"
import "./App.css"


const defaultText = `# This is an h1
## This is an h2

You can also format text and make it **bold**...
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

You can also add code blocks:

\`\`\`
let myString = "Hello World!";
console.log(myString);
\`\`\`
or add some inline code like these divs \`<div></div>\` (soooo many divs).

[Links] (https://www.freecodecamp.org) are also a possiblity.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. The numbering will work itself out!`

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
            <div className="container border main-container">
                <div className="row">
                    <h1 className="p-2">fepec's markdown previewer</h1>
                </div>
                <div className="row" >
                    <EditorWindow handleChange={this.handleChange} text={this.state.text}  />
                    <PreviewWindow text={this.state.text} className="col"/>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        );
    }
}

function Footer () {
    return (
        <div>
            <p>created by <a href="www.github.com/fepec">fepec</a></p>
        </div>
    )
}