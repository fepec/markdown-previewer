
export default function EditorWindow(props) {
    return (
        <div>
            <div>
                <h1>This is my input field</h1>
                <textarea onChange={props.handleChange} value={props.text}></textarea>

            </div>
        </div>
    )
}
