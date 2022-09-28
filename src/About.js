import {useLocation, useSearchParams} from "react-router-dom";

const About = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get('mode');

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 기초 활용 연습 모음</p>
            <p>쿼리 스트링 : {location.search}</p>
            <p>{query.get('detail')} : {mode}</p>
        </div>
    );
}

export default About;