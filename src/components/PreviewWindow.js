import { marked } from "marked";



export default function PreviewWindow (props) {
    return (
        <div className="col">
            
                <h1>This is my Preview Window</h1>
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

    return <div dangerouslySetInnerHTML={html}></div>
}