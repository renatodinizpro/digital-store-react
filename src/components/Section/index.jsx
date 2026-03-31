import "./index.css";

export default function Section({ title, titleAlign = "left", children }) {
  return (
    <section className="section">
      {title && (
        <h2 className="section-title" style={{ textAlign: titleAlign }}>
          {title}
        </h2>
      )}

      <div className="section-content">{children}</div>
    </section>
  );
}
