
export default function PreviewWindow (props) {
    return (
        <div>
            <div>
                <h1>This is my Preview Window</h1>
                <PreviewArea text={props.text}/>
            </div>
        </div>
    )
}

function PreviewArea (props) {
    return <div>
        My output goes here.
    </div>
}