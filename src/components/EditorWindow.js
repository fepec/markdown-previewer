
export default function EditorWindow(props) {
    return (
        
            <div className="editor col d-flex flex-column"> 
                <h2 className="title p-1">editor</h2>
                <textarea className="flex-fill p-3" onChange={props.handleChange} value={props.text} id="editor"></textarea>

            </div>
        
    )
}
