import {useState} from "react";
import axios from "axios";
import {TextareaAutosize} from "@mui/material";

const AxiosExample = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=82dd10577ac4483c9cacd04c3aef84a9'
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            <div>
                {data && <textarea cols={100} rows={100} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
            </div>
        </div>
    );
}

export default AxiosExample;