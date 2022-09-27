import './Practice01.css';
import EmailTemplate from "./components/EmailTemplate";
import EmailInsert from "./components/EmailInsert";
import EmailList from "./components/EmailList";
import {useState, useRef, useCallback} from "react";
import EmailSearch from "./components/EmailSearch";

const Practice01 = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'jonamjun.dev@gmail.com',
            checked: true
        },
        {
            id: 2,
            text: 'asdasd123@asdasd.com',
            checked: true
        },
        {
            id: 3,
            text: 'test0101@testtest.com',
            checked: false
        }
    ]);
    const [schText, setSchText] = useState('');

    const nextId = useRef(4);
    const onInsert = useCallback(text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos],
    );
    const onRemove = useCallback(id => {
        setTodos(todos.filter(todo => todo.id !== id));
        }, [todos]
    );
    const onToggle = useCallback(id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
    }, [todos]);
    const onSearch = useCallback(text => {
        setSchText(text);
    }, [schText]);

    return (
        <EmailTemplate>
            <EmailSearch onSearch={onSearch}/>
            <EmailInsert onInsert={onInsert}/>
            <EmailList todos={todos} schText={schText} onRemove={onRemove} onToggle={onToggle}/>
        </EmailTemplate>
    )
}

export default Practice01;
