import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);  
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);  
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);  
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }   
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const[text, setText] = useState(' ');
    //text ="new text"; wrong way to change the state
    //setText("new Text"); right way to chnage the text
  return (
    <>
    <div className='container' style={{color: props.Mode === 'dark'?'white':'black'}}>
<h1>{props.heading} </h1> 
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange = {handleOnChange} 
  style={{backgroundColor: props.Mode === 'light'?'grey':'white' , color: props.Mode === 'dark'?'white':'black'}} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}  >Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}  >Convert to Loweccase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}  >Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}  >Copy</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}  >Remove Extra Spaces</button>

    </div>
    <div className="container my-3">
     <h2>Your Text Summary</h2>
     <p>{text.split(" ").length} words and  {text.length} character</p>
     <p>{0.008 * text.split(" ").length} minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
