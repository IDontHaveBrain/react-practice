import {useState} from "react";

const EmpFilter = ({filter}) => {
    return (
        <div>
            <input type={"radio"} name={"fdept"} value={"전체"} defaultChecked={true} onChange={(e) => filter(e)}/>전체
            <input type={"radio"} name={"fdept"} value={"시스템사업부"} onChange={(e) => filter(e)}/>시스템사업부
            <input type={"radio"} name={"fdept"} value={"에너지사업부"} onChange={(e) => filter(e)}/>에너지사업부
            <input type={"radio"} name={"fdept"} value={"NGS사업부"} onChange={(e) => filter(e)}/>NGS사업부
            <input type="text" name={"fname"} onChange={(e) => filter(e)} placeholder={"이름 검색"}/>
        </div>
    );
}

export default EmpFilter;