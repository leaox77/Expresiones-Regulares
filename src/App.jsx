import { useState } from 'react';
import FormSection from './components/FormSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { sections } from './constants/sections';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="app-container">
      <div className="regex-app">
        <h1>Validación de Formularios con Expresiones Regulares</h1>
        
        <Navigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          sections={sections}
        />

        <main>
          <FormSection
            title={sections[activeTab].title}
            fields={sections[activeTab].fields}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;