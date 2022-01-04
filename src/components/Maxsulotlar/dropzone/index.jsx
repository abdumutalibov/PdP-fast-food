import React, { useState } from "react";
import "./styles.css";
import Path from '../../../assets/icons/upload.svg'
import Dropzone from "react-dropzone";

export default function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

  return (
    <div className="App">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
<img src={Path} alt="" />
            <p>Maxsulot rasmini yuklang</p>
            
          </div>
        )}
      </Dropzone>
      <div>
      {/* <strong>Files:</strong> */}
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
      <div className="save">Saqlsh</div>
    </div>
  );
}