import React from 'react';

export function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            Currently pursuing my first year in BBA, I am a passionate individual with a strong
            drive to become a programmer. Based in Bhangrola, Gurugram, I am constantly
            expanding my knowledge in various programming languages and technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Python Programming</li>
                <li>Excel</li>
                <li>Prompt Engineering</li>
                <li>R Programming</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Problem Solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Creativity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}