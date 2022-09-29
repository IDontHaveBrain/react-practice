//import './Practice01Adv.css';
import EmailTemplate from "./components/EmailTemplate";
import EmailInsert from "./components/EmailInsert";
import EmailList from "./components/EmailList";
import {useState, useRef, useCallback} from "react";
import EmailSearch from "./components/EmailSearch";

const Practice01Adv = () => {
    const [emails, setEmails] = useState([
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
    const [emailView, setEmailView] = useState(emails.concat());
    const [schText, setSchText] = useState('');
    //const forceSch = useRef(null);

    const nextId = useRef(4);
    const onInsert = useCallback(text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            setEmails(emails.concat(todo));
            nextId.current += 1;
            //forceSch.onSearchClick();
        },
        [emails],
    );
    const onRemove = useCallback(id => {
        setEmails(emails.filter(todo => todo.id !== id));
        }, [emails]
    );
    const onToggle = useCallback(id => {
        setEmails(emails.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
    }, [emails]);
    const onSearch = useCallback(text => {
        setSchText(text);
    }, [schText]);

    const setView = useCallback((data) => {
        setEmailView(data);
    });
    const customFilter = useCallback((data, text) => {
        return data.filter((item) => item.text.indexOf(text) !== -1);
    });

    return (
        <EmailTemplate>
            <EmailSearch setView={setView} data={emails} filter={customFilter}/>
            <EmailInsert onInsert={onInsert}/>
            <EmailList emails={emailView} schText={schText} onRemove={onRemove} onToggle={onToggle}/>
        </EmailTemplate>
    )
}

export default Practice01Adv;
