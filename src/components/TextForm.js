import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'; 
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleuc = () => {
    console.log("Convert to uc");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelc = () => {
    console.log("Convert to uc");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onchange = (event) => {
    console.log("change being done");
    setText(event.target.value);
  };
  const handleclear = () => {
    console.log("clearing the text");
    setText("");
  };
  const handlefont = () => {
    console.log("change font");
    document.getElementById("demo").style.fontFamily =
      "Impact,Charcoal,sans-serif";
  };
  const handlescript = () => {
    console.log("change script");
    document.getElementById("demo").style.fontFamily = "Ceviche One, cursive";
  };
  const handlecap = () => {
    console.log("capitalize");
    let newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
  };
  const handlecopy = () => {
    console.log("copy");
    let newtext = document.getElementById("demo")
    newtext.select()
    newtext.setSelectionRange(0,9999)
    navigator.clipboard.writeText(newtext.value)

  }
  function empty() {
    if(!text)
    return (
      <h2>Type to continue</h2>
    )
  }
  function wordcount() {
    if (text)
      return (
        <>
        <h1>Word counter</h1>
        <h3 onChange={wordcount}>
          {text.split(' ').filter(word => word !==' ').length} words and {text.length} characters
        </h3>
        </>
      );
  };
  function preview() {
    if(text)
    return(
      <>
      <h1>Preview</h1>
      <h6 onChange={preview}>{text}</h6>
      </>
    )
  }


  return (
    <>
      <div style={{ display: "flex", flexdirection: "column" }}>
        <div
          style={{
            backgroundColor: "#301934",
          }}
          className="col-md-7"
        >
          <h1 className="mx-3" style={{ color: "white" }}>
            {props.heading}
          </h1>
          <FloatingLabel controlId="demo">
            <Form.Control
              as="textarea"
              className="my-3 mx-3"
              placeholder={props.placeholder}
              style={{ height: "300px", width: "80%" }}
              rows="8"
              onChange={onchange}
              value={text}
            />
          </FloatingLabel>
          <div className="mx-5">
            <button className="btn btn-outline-light my-3 mx-4" onClick={handleuc}>
              {props.btntxt1}
            </button>
            <button className="btn btn-outline-light my-3 mx-4" onClick={handlelc}>
              {props.btntxt2}
            </button>
            <button className="btn btn-outline-light my-3 mx-4" onClick={handleclear}>
              {props.btntxt3}
            </button>
          </div>
          <div className="mx-5">
            <button className="btn btn-outline-light my-3 mx-4" onClick={handlefont}>
              {props.btntxt4}
            </button>
            <button className="btn btn-outline-light my-3 mx-4" onClick={handlescript}>
              {props.btntxt5}
            </button>
            <button className="btn btn-outline-light my-3 mx-4" onClick={handlecap}>
              {props.btntxt6}
            </button>
            <button className="btn btn-outline-light my-3 mx-4" onClick={handlecopy}>
              {props.btntxt7}
            </button>
          </div>
        </div>
        <div
          className="col-md-5"
          style={{
            backgroundColor: "#301934",
          }}
        >
        <div style = {{color: "white"}} className = "my-3 mx-3">
          {empty()}
          {wordcount()}
          {preview()}
        </div>
          
        </div>
      </div>
    </>
  );
}
