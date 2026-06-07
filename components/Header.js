'use client';

import { schoolInfo, navigationMenu } from '@/utils/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="bg-gray-100 py-2 text-sm hidden md:block">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <span>📞 {schoolInfo.phone}</span>
              <span>✉️ {schoolInfo.email}</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-800">{schoolInfo.name}</h1>
              <p className="text-sm text-gray-600">Affiliation: {schoolInfo.affiliation}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navigationMenu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {navigationMenu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-blue-600 py-2"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
