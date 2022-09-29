import {MdSearch} from "react-icons/md";
import "./EmailSearch.scss";
import {useCallback, useEffect, useState} from "react";

const EmailSearch = ({setView, data, filter}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const defaultFilter = useCallback((data, text) => {
        return data.filter((item) => item.text.indexOf(text) !== -1);
    });

    const onSearchClick = useCallback(() => {
        // if (!filter) {
        const temp = filter(data, value);
        console.log(temp);
        setView(temp);
    });

    const autoSearch = useEffect(() => {
        onSearchClick();
    }, [data]);

    return (
        <div className="TodoSearch">
            <input placeholder="검색할 내용을 입력하세요" value={value} onChange={onChange}/>
            <button onClick={() => onSearchClick()}>
                <MdSearch />
            </button>
        </div>
    );
}

export default EmailSearch;