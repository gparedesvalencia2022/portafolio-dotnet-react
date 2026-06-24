export default function Section({ title, children }) {
    return (
        <div className="mb-5">
            <h2 className="text-center mb-4">{title}</h2>
            {children}
        </div>
    );
}