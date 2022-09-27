import {MdSearch} from "react-icons/md";
import "./EmailSearch.scss";
import {useCallback, useState} from "react";

const EmailSearch = ({onSearch}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return (
        <div className="TodoSearch">
            <input placeholder="검색할 내용을 입력하세요" value={value} onChange={onChange}/>
            <button onClick={() => onSearch(value)}>
                <MdSearch />
            </button>
        </div>
    );
}

export default EmailSearch;