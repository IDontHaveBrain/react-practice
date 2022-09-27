import './EmailTemplate.scss';

const EmailTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">이메일 저장</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default EmailTemplate;