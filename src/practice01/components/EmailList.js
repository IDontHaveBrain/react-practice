import EmailListItem from "./EmailListItem";
import "./EmailList.scss";

const EmailList = ({todos, schText, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.filter(todo => todo.text.indexOf(schText) !== -1).map(todo => (
                <EmailListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default EmailList;