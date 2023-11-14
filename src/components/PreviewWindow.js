
export default function PreviewWindow () {
    return (
        <div>
            <div>
                <h1>This is my Preview Window</h1>
                <PreviewArea />
            </div>
        </div>
    )
}

function PreviewArea () {
    return <div>
        My output goes here.
    </div>
}