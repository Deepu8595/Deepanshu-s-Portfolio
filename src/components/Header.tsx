import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="profile-upload"
              />
              <label
                htmlFor="profile-upload"
                className="cursor-pointer text-gray-600 text-sm text-center"
              >
                Click to upload profile photo
              </label>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">DEEPANSHU</h1>
            <p className="text-xl mb-4">Aspiring Programmer & BBA Student</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="mailto:deepanshuydv15@gmail.com" className="hover:text-gray-200">
                <Mail size={24} />
              </a>
              <a href="tel:8595304072" className="hover:text-gray-200">
                <Phone size={24} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}