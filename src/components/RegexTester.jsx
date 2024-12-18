import { useState } from 'react';
import { testPattern } from '../utils/validation';

function RegexTester({ pattern, testString, flags = 'g', description }) {
  const [input, setInput] = useState(testString || '');
  const [matches, setMatches] = useState([]);

  const handleInputChange = (value) => {
    setInput(value);
    setMatches(testPattern(value, pattern, flags));
  };

  return (
    <div className="regex-tester">
      <p className="description">{description}</p>
      <div className="pattern">
        <code>Pattern: /{pattern}/{flags}</code>
      </div>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Try it here..."
          className="test-input"
        />
      </div>
      <div className="matches">
        <h4>Matches:</h4>
        {matches.length > 0 ? (
          <ul>
            {matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        ) : (
          <p>No matches found</p>
        )}
      </div>
    </div>
  );
}

export default RegexTester;