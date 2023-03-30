function TextCard({ title, text_body }) {
    return (
        <div className="text-card-container">
            <h4>{title}</h4>
            <p className="text-card-text-body">{text_body}</p>
        </div>
    )
}
export default TextCard
