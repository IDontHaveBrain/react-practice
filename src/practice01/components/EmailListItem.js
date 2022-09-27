import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import "./EmailListItem.scss";

const EmailListItem = ({todo, onRemove, onToggle}) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem">
            {/*
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                */}
            <div>
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default EmailListItem;