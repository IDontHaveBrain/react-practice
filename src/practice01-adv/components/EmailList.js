import EmailListItem from "./EmailListItem";
import "./EmailList.scss";

const EmailList = ({emails, schText, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {emails.map(email => (
                <EmailListItem todo={email} key={email.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default EmailList;