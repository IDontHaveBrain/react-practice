import {read, utils, writeFile, writeFileXLSX} from 'xlsx';
import {useCallback, useEffect, useMemo, useReducer, useRef, useState} from "react";
import EmpList from "./EmpList";
import EmpFilter from "./EmpFilter";
import Button from '@mui/material/Button';
import {DataGrid} from "@mui/x-data-grid";

function WebExcel() {
    const initialState = [
        {index: 1, name: '홍길동', empno: 2019001, dept: '시스템사업부', position: '사원', hiredate: '2021-01-01'},
        {index: 2, name: '김길동', empno: 2019002, dept: '에너지사업부', position: '사원', hiredate: '2021-01-02'},
        {index: 3, name: '박길동', empno: 2019003, dept: '시스템사업부', position: '사원', hiredate: '2021-01-03'},
        {index: 4, name: '이길동', empno: 2019004, dept: '에너지사업부', position: '사원', hiredate: '2021-01-04'},
        {index: 5, name: '최길동', empno: 2019005, dept: 'NGS사업부', position: '사원', hiredate: '2021-01-05'},
    ]
    const [emp, setEmp] = useState(initialState);
    const [filter, setFilter] = useState({fname: '', fdept: '전체'});
    const importEl = useRef(null);

    const importExcel = useCallback((e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        // 로드완료시 호출
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            console.log(read(bstr));
            const wb = read(bstr, {type: 'binary'});
            /* 첫번째 시트 */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* 시트 to 객체 */
            const newdata = utils.sheet_to_json(ws);
            /* Update state */
            setEmp(newdata);
            console.log(newdata);
        };
        reader.readAsBinaryString(file);
    }, []);

    const exportFile = useCallback(() => {
        const ws = utils.json_to_sheet(emp);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        writeFileXLSX(wb, "SheetJSReactAoO.xlsx");
    }, [emp]);

    const onChange = useCallback((e, index) => {
        console.log(e.target.name + " : " + e.target.value);
        const {value, name} = e.target;
        const nextPres = emp.map((item) => {
            if (item.index === index) {
                if (name === 'hiredate') {
                    return {...item, [name]: new Date(value)};
                }
                return {...item, [name]: value};
            }
            return item;
        });
        console.log(nextPres);
        setEmp(nextPres);
    });

    function onImport(e) {
        importEl.current.click();
    }

    const setFilterChange = useCallback((e) => {
        const {value, name} = e.target;
        console.log(name + " : " + value);
        setFilter({...filter, [name]: value});
    });

    const columns = [
        {field: 'index', headerName: '순번', width: 100},
        {field: 'name', headerName: '이름', width: 150},
        {field: 'empno', headerName: '사원번호', width: 150},
        {field: 'dept', headerName: '부서', width: 150},
        {field: 'position', headerName: '직급', width: 150},
        {field: 'hiredate', headerName: '입사일', width: 150},
    ];

    const getApplyFilterFnSameName = (value) => {
        return (params) => {
            return value.indexOf(filter.fname) !== -1;
        };
    };


    const getApplyFilterFn = (value) => {
        return (params) => {
            return value.indexOf(filter.fname) !== -1;
        };
    }

    const columns2 = [
        {field: 'index', headerName: '순번', width: 100},
        {field: 'name', headerName: '이름', width: 150, filterable: true, filterOperator: getApplyFilterFn},
        {field: 'empno', headerName: '사원번호', width: 150},
        {field: 'dept', headerName: '부서', width: 150},
        {field: 'position', headerName: '직급', width: 150},
        {field: 'hiredate', headerName: '입사일', width: 150},
    ];

    return (
        <div className="App">
            <EmpFilter filter={setFilterChange}/>
            <EmpList data={emp} onChange={onChange} filter={filter}/>
            <div>
                <Button variant={"outlined"} color={"success"} onClick={exportFile}>Export Excel</Button>
                <Button variant={"outlined"} color={"primary"} onClick={onImport}>Import Excel</Button>
                <input id="input-excel" type={"file"} onChange={importExcel} ref={importEl} hidden={true}/>
            </div>
            <br/><br/>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid getRowId={(row) => row.index} rows={emp} columns={columns} pageSize={20}
                          filterModel={{items: [{ columnField: 'name', operatorValue: 'contains', value: filter.fname}]}}/>
            </div>
        </div>
    );
}

export default WebExcel;
