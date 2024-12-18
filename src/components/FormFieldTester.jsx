import { useState } from 'react';
import { validatePattern } from '../utils/validation';

function FormFieldTester({ fieldName, pattern, description, placeholder, example }) {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (value) => {
    setInput(value);
    setIsValid(validatePattern(value, pattern));
  };

  return (
    <div className="form-field-tester">
      <div className="field-header">
        <h3>{fieldName}</h3>
        <span className={`validation-badge ${isValid ? 'valid' : 'invalid'}`}>
          {isValid ? '✓ Válido' : '✗ Inválido'}
        </span>
      </div>
      
      <p className="field-description">{description}</p>
      <div className="example">
        <span>Ejemplo:</span> {example}
      </div>
      
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={placeholder}
          className={`form-input ${isValid ? 'valid' : ''}`}
        />
      </div>
      
      <div className="pattern-info">
        <code>Patrón: /{pattern}/</code>
      </div>
    </div>
  );
}

export default FormFieldTester;