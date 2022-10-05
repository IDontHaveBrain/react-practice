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
import MenuBase from "./menu/MenuBase";
import {Box, createTheme, CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import Practice01Adv from "./practice01-adv/Practice01Adv";
import NoImmer from "./immer-practice/NoImmer";
import WithImmer from "./immer-practice/WithImmer";
import NewsViewer from "./newsViewer/NewsViewer";
import ContextPractice from "./context-practice/ContextPractice";
import ReactRedux from "./react-redux/ReactRedux";
import CodeSplitting from "./code-splitting/CodeSplitting";
import Ssr from "./ssr/Ssr";

const theme = createTheme({});

function App() {
    return (
        <div className="App">
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <MenuBase>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/about'} element={<About/>}/>
                            <Route path={'/email'} element={<Practice01/>}/>
                            <Route path={'/emailAdv'} element={<Practice01Adv/>}/>
                            <Route path={'/webexcel'} element={<WebExcel/>}/>
                            <Route path={'/noimmer'} element={<NoImmer/>}/>
                            <Route path={'/withimmer'} element={<WithImmer/>}/>
                            <Route path={'/newsviewer'} element={<NewsViewer/>}/>
                            <Route path={'/newsviewer:category'} element={<NewsViewer/>}/>
                            <Route path={'/context'} element={<ContextPractice/>}/>
                            <Route path={'/reactredux'} element={<ReactRedux/>}/>
                            <Route path={'/codesplitting'} element={<CodeSplitting/>}/>
                            <Route path={'/ssr/*'} element={<Ssr/>}/>
                            <Route path={'/profiles/*'} element={<Profiles/>}/>
                            <Route path={'/history'} element={<HistorySample/>}/>
                            <Route path={'*'} element={<div>페이지를 찾을 수 없습니다.</div>}/>
                        </Routes>
                    </MenuBase>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    );
}

export default App;
