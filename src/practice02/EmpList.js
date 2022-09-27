import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const EmpList = ({data, onChange, filter}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>순번</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>사원번호</TableCell>
                        <TableCell>부서</TableCell>
                        <TableCell>입사일</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.filter(item => item.dept.indexOf(
                            filter.fdept === '전체' ? '' : filter.fdept) !== -1 && item.name.indexOf(filter.fname) !== -1).map(item => (
                            <TableRow key={item.index}>
                                <TableCell component={"th"} scope={"row"}>{item.index}</TableCell>
                                <TableCell><input type={"text"} name={"name"} value={item.name} onChange={(e) => onChange(e, item.index)}/></TableCell>
                                <TableCell><input type={"text"} name={"empno"} value={item.empno} onChange={(e) => onChange(e, item.index)}/></TableCell>
                                <TableCell><input type={"text"} name={"dept"} value={item.dept} onChange={(e) => onChange(e, item.index)}/></TableCell>
                                <TableCell><input type={"date"} name={"hiredate"} value={item.hiredate} onChange={(e) => onChange(e, item.index)}/></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EmpList;