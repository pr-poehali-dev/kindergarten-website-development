
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Name */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-kindergarten-yellow rounded-full flex items-center justify-center mr-3">
              <span className="text-xl font-bold">☀️</span>
            </div>
            <h1 className="text-xl font-bold font-montserrat">Детский сад "Солнышко"</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-primary font-medium">О нас</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Программы</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Галерея</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Отзывы</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Контакты</a>
            <Button className="btn-primary">Записаться</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <ul className="space-y-4">
              <li><a href="#" className="block py-2 text-gray-700 hover:text-primary font-medium">О нас</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-primary font-medium">Программы</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-primary font-medium">Галерея</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-primary font-medium">Отзывы</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-primary font-medium">Контакты</a></li>
              <li><Button className="btn-primary w-full">Записаться</Button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
