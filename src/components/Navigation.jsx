function Navigation({ activeTab, onTabChange, sections }) {
  return (
    <nav className="tabs">
      {Object.entries(sections).map(([key, section]) => (
        <button
          key={key}
          className={activeTab === key ? 'active' : ''}
          onClick={() => onTabChange(key)}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;