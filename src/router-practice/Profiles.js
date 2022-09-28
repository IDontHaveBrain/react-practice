import Profile from "./Profile";
import {Link, NavLink, Route, Routes, useRoutes} from "react-router-dom";

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };

    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink style={({isActive}) => isActive?activeStyle:null} to={'/profiles/velopert'}>velopert</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive?activeStyle:null} to={'/profiles/gildong'}>gildong</NavLink>
                </li>

            </ul>
            <Routes>
                <Route path={''} element={<div>사용자를 선택해주세요.</div>}/>
                <Route path={':username'} element={<Profile/>}/>
            </Routes>
        </div>
    )
}

export default Profiles;
