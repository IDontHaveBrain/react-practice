import {Component, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const HistorySample = () => {
    const nav = useNavigate();

    const handleGoBack = () => {
        nav(-1);
    }

    const handleGoHome = () => {
        nav('/');
    }

    return (
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;