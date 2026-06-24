export default function LanguageBlock({ title, content }) {
    return (
        <div className="col-12 col-md-4 mb-4">
            <h4>{title}</h4>

            {content?.map((item, i) => (
                <div key={i} className="mb-2">
                    {item}
                </div>
            ))}
        </div>
    );
}