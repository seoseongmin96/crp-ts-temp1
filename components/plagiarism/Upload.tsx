import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import style from '@/styles/Float.module.css'
const fileTypes = ["JPG", "PNG", "GIF"];

export function Upload() { // yarn add react-drag-drop-files
  const [file, setFile] = useState(null);
  const handleChange = (file: React.SetStateAction<null>) => {
    setFile(file);
  };
  return (
      <div className={style.container}>
          <form action="/plagiarism/select">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> <br/>
            <button type="submit" className={style.button}>악보 업로드</button>
          </form>
          <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
      </div>
      
  );
}