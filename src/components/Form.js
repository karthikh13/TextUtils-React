import React ,{useState}from 'react'


export default function Form(props) {
    const [text,setText] = useState("");

    const handleWhitespace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Whitespaces are removed","Success")
    }

    const handleCopy=()=>{
        let text=document.getElementById("my box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard","Success")

    }
    const handleUpClick = ()=>{
        
        let newText =text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Upwercase","Success")
    }
    const  handleLoClick= ()=>{
    
        let newText =text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lowercase","Success")
    }
    const handleClear = ()=>{
        
        let newText =("");
        setText(newText)
        props.showalert("Texts are Cleared","Success")
    }
    const handleOnchange = (event)=>{
        console.log("onchange");
        setText(event.target.value)
    }
    
return(
    <>
<div className="container" style={{ color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="my box" value={text} style={{ backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnchange} rows="8"></textarea>
    </div>
    <div className='my-2'>
    <button className="btn btn-primary"onClick={handleUpClick} >Convert to uppercase</button>
    <button className="btn btn-primary mx-2"onClick={handleLoClick} >Convert to uppercase</button>
    <button className="btn btn-primary  "onClick={handleClear} >ClearText</button>
    <button className="btn btn-primary mx-1"onClick={handleCopy} >CopyText</button>
    <button className="btn btn-primary mx-1"onClick={handleWhitespace} >Remove whitespace</button>
    </div>
</div>
<div className="conatiner"style={{ color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p> { text.trim().length===0?0:text.trim().split(" ").length} words  and {text.trim().length} character </p>
    <p> {0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter somthing in box"}</p>

</div>
</>  
)
}

