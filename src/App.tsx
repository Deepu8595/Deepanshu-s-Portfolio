import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;