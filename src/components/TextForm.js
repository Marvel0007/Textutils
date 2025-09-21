import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleReplace = () => {
        let newText = text.replaceAll(" is ", " was ");
        setText(newText)
        props.showAlert("Converted is to was!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#1d1f21':'white', color: props.mode==='dark'?'white':'black', border: '1.5px solid #242424'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Upcase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Lowcase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleReplace}>Replace</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text above to preview here"}</p>
    </div>
    </>
  )
}
