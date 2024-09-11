import "../styles/ErrorIndicator.css"

const ErrorIndicator = ({ text }) => {
    console.log(text)
    return <div className="error-container">
        <div className="error">{text}</div>
    </div>
}

export default ErrorIndicator