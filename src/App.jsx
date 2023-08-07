import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

function App() {
  const [value, setValue] = useState("");
  console.log(value.length);
  return (
    <div className="container">
      <div className="row">
        <div className="editor">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor-input"
            modules={modules}
          ></ReactQuill>
        </div>
        <br></br>
        <div className="preview" 
        dangerouslySetInnerHTML={{__html: value}}
        ></div>
        <div style={{
          height: "1px",
          width: "100%",
          display: "block",
          background: "red"
        }}></div>
        <div className="preview" 
        >{value}</div>
      </div>
      <p>Total words: {value.length}</p>
    </div>
  );
}

export default App;
