import EditorWindow from "./components/EditorWindow"
import PreviewWindow from "./components/PreviewWindow"

export default class App extends React.Component {

    render() {
    return (
        <>
        <EditorWindow />
        <PreviewWindow />
        </>
    );
    }
}