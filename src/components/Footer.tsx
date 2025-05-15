
import React from 'react';
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-kindergarten-blue/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-kindergarten-yellow rounded-full flex items-center justify-center mr-3">
                <span className="text-xl font-bold">☀️</span>
              </div>
              <h2 className="text-xl font-bold font-montserrat">Детский сад "Солнышко"</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Мы создаем уютную и безопасную среду для гармоничного развития вашего ребенка.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Программы обучения</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Галерея</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Часто задаваемые вопросы</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Ясельная группа</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Младшая группа</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Средняя группа</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Старшая группа</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Дополнительные занятия</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Icon name="MapPin" className="mr-3 mt-1 text-primary" size={18} />
                <span className="text-gray-600">ул. Солнечная, 123, г. Москва</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-3 text-primary" size={18} />
                <span className="text-gray-600">+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-3 text-primary" size={18} />
                <span className="text-gray-600">info@солнышко-сад.рф</span>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="mr-3 text-primary" size={18} />
                <span className="text-gray-600">Пн-Пт: 8:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-kindergarten-blue/30 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Детский сад "Солнышко" — Все права защищены</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary">Правила</a>
            <a href="#" className="hover:text-primary">Лицензия</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
