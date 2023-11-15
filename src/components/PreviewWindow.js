import { marked } from "marked";



export default function PreviewWindow (props) {
    return (
        <div className="col">
            
                <h2 className="title p-1">markdown preview window</h2>
                <PreviewArea text={props.text}/>
            
        </div>
    )
}

function PreviewArea (props) {
    // Set options for Marked
    marked.use({
        async: false,
        pedantic: false,
        gfm: true,
      });

    let html = {
        __html: marked.parse(props.text)
    }

    return <div id="preview" className="p-2 overflow-auto" dangerouslySetInnerHTML={html}></div>
}