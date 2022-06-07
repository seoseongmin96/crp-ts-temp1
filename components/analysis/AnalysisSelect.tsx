import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

export function AnalysisSelect() { // yarn add react-drag-drop-files
  const [file, setFile] = useState(null);
  const handleChange = (file: React.SetStateAction<null>) => {
    setFile(file);
  };
  return (
      <div style={{margin: "0 auto"}}>
          <form action="/analysis/analysis">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> <br/>
            <button type="submit" className="btn btn-outline-dark">악보 등록</button>
          </form>
      </div>
  );
}