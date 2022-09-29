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
        if (!filter) {
            console.log('필터 미설정, 기본필터 실행');
            const temp = defaultFilter(data, value);
            setView(temp);
        }else {
            console.log('필터 설정, 커스텀 필터 실행');
            const temp = filter(data, value);
            setView(temp);
        }
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