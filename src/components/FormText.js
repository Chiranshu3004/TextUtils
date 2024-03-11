import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function FormText(props) {
    const handleOnChange= (event) =>{
        console.log("handle on Change was clicked");
        setText(event.target.value);
    }
    const handleUpClick = () =>{
        console.log("Uppercase was Clicked");
        setText(text.toUpperCase());
        props.showAlert('Text has been converted into Uppercase', 'success');
    }

    const handleClearClick = () =>{
        console.log("Text was cleared");
        setText("");
        props.showAlert('Text has been completely cleared', 'success');
    }

    const handleLoClick = () =>{
        console.log("Lowercase was Clicked");
        setText(text.toLowerCase());
        props.showAlert('Text has been converted into LowerCase', 'success');
    }

    const handleCopy = () =>{
        console.log("Text has been Copied");
        var text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Text has been copied', 'success');
        
    }

    const handleCExtraSpace = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert('Extra Space is removed', 'success');
    }

    const handleonspeak=()=>{
      let msg=new SpeechSynthesisUtterance();
      msg.text=text;
      window.speechSynthesis.speak(msg);
      props.showAlert('Speaking...  ', 'success');
    }

    const [text,  setText]  =   useState(" ");
    
  return (
    <>
    <div>
      <div className="mb-3">
        <h3 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h3>
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='light'?
        'white':'#051b32',color: props.mode==='light'?'black':'white'}}value={text} onChange={handleOnChange} rows="8"></textarea>

        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCExtraSpace}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleonspeak}>Speak</button>
      </div>
    </div>
    <div>
      <div className="mb-3">
        <h3 style={{color: props.mode==='light'?'black':'white'}}>Text Summary</h3>
        <p style={{color: props.mode==='light'?'black':'white'}}>No of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and No of Characters: {text.length}</p>
        <p style={{color: props.mode==='light'?'black':'white'}}>Minutes take to read: {0.08*text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
        <h3 style={{color: props.mode==='light'?'black':'white'}}>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
    </>
  )
}

FormText.propTypes={
  heading: PropTypes.string.isRequired
}
FormText.defaultProps={
  heading:"enter the text"
}

