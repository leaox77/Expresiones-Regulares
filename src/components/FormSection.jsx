import FormFieldTester from './FormFieldTester';
import { formPatterns } from '../constants/regexPatterns';

function FormSection({ title, fields }) {
  return (
    <section className="form-section">
      <h2>{title}</h2>
      <div className="fields-grid">
        {fields.map((field) => (
          <FormFieldTester
            key={field.name}
            fieldName={field.name}
            pattern={formPatterns[field.patternKey]}
            description={field.description}
            placeholder={field.placeholder}
            example={field.example}
          />
        ))}
      </div>
    </section>
  );
}

export default FormSection;