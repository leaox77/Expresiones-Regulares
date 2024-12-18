function RegexSection({ title, children }) {
  return (
    <section className="regex-section">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </section>
  );
}

export default RegexSection;