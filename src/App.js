import logo from './logo.svg';
import './App.css';
import Practice01 from "./practice01/Practice01";
import WebExcel from "./practice02/WebExcel";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./router-practice/Profile";
import Profiles from "./router-practice/Profiles";
import HistorySample from "./router-practice/HistorySample";
import LeftNav from "./menu/LeftNav";
import {Box, createTheme, CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";

const theme = createTheme({});

function App() {
    return (
        <div className="App">
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <LeftNav>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/about'} element={<About/>}/>
                            <Route path={'/email'} element={<Practice01/>}/>
                            <Route path={'/webexcel'} element={<WebExcel/>}/>
                            <Route path={'/profiles/*'} element={<Profiles/>}/>
                            <Route path={'/history'} element={<HistorySample/>}/>
                            <Route path={'*'} element={<div>페이지를 찾을 수 없습니다.</div>}/>
                        </Routes>
                    </LeftNav>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    );
}

export default App;
