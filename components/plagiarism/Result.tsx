import {useEffect, useState} from "react"

export function Result() {
    const [file, setFile] = useState(null);
    useEffect(() => {
        setFile(document.getElementsByName("file"))
    })
    console.log(file)
    return(<>
        <div style={{width: 1050+"px", float:"left", display: "flex", paddingRight: 50+"px"}}>
            <img src="https://cdn.imweb.me/upload/S20200724abcb07db26ecf/0837716fc9c26.jpeg" style={{width:500+"px"}}/> &nbsp;
            <img src="https://t1.daumcdn.net/cfile/blog/216726375580C95335" style={{width:500+"px"}}/>
        </div>
        <br/><br/>
        <h5>검사 결과 ... 악보와 XX.X% 유사합니다.</h5>
       
    </>)
}