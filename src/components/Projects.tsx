import React from 'react';
import { Upload } from 'lucide-react';

export function Projects() {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Calculator', 'ERP System', 'Ludo Programme', 'Quiz Programme', 'AI Video Creator'].map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id={`project-${index}`}
                />
                <label
                  htmlFor={`project-${index}`}
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                >
                  <Upload size={24} className="text-gray-600 mb-2" />
                  <span className="text-gray-600 text-sm">Upload project image</span>
                </label>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project}</h3>
                <p className="text-gray-600 mb-4">
                  Click to upload project details and screenshots
                </p>
                <button className="text-blue-600 hover:text-blue-800">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}