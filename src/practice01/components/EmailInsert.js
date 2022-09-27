import {MdAdd} from "react-icons/md";
import "./EmailInsert.scss";
import {useCallback, useState} from "react";


const EmailInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            if (regex.test(value)) {
                onInsert(value);
                setValue('');
            } else {
                alert("이메일 형식이 아닙니다.");
            }
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
    <form className={"TodoInsert"} onSubmit={onSubmit}>
      <input placeholder="이메일을 입력하세요"
             value={value}
             onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default EmailInsert;