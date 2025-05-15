
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-kindergarten-yellow/30 to-white pt-16 pb-24">
        <div className="section-container flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left animate-float">
              Детский сад <span className="text-primary">"Солнышко"</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-center md:text-left">
              Место, где ваши дети растут счастливыми, развиваются и познают мир в дружелюбной атмосфере заботы и внимания.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="btn-primary text-base">Записаться на экскурсию</Button>
              <Button variant="outline" className="text-base">Наши программы</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1526634215804-1d9280936cc5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" 
              alt="Счастливые дети в детском саду" 
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover animate-float"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 right-1/4 w-20 h-20 bg-kindergarten-blue rounded-full opacity-30 animate-float" />
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-kindergarten-green rounded-full opacity-20 animate-float" style={{animationDelay: "1s"}} />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-kindergarten-pink rounded-full opacity-20 animate-float" style={{animationDelay: "2s"}} />
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-kindergarten-blue/10">
        <div className="section-container">
          <h2 className="section-title">Почему родители выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="Heart" 
              title="Забота и внимание" 
              description="Индивидуальный подход к каждому ребенку, учитывая его особенности и потребности."
              color="kindergarten-pink"
            />
            <FeatureCard 
              icon="BookOpen" 
              title="Развивающие программы" 
              description="Современные образовательные методики для всестороннего развития ребёнка."
              color="kindergarten-green"
            />
            <FeatureCard 
              icon="Utensils" 
              title="Здоровое питание" 
              description="Сбалансированное меню, разработанное с учетом детских потребностей."
              color="kindergarten-yellow"
            />
            <FeatureCard 
              icon="ShieldCheck" 
              title="Безопасность" 
              description="Территория и помещения оборудованы системами безопасности."
              color="kindergarten-blue"
            />
            <FeatureCard 
              icon="Users" 
              title="Опытные воспитатели" 
              description="Команда профессионалов с педагогическим образованием и любовью к детям."
              color="kindergarten-purple"
            />
            <FeatureCard 
              icon="Music" 
              title="Творческое развитие" 
              description="Музыка, рисование, лепка и другие творческие занятия для развития талантов."
              color="kindergarten-yellow"
            />
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-title">Наши программы</h2>
          <Tabs defaultValue="младшая" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="младшая" className="text-base py-3 px-6">Младшая группа (2-3 года)</TabsTrigger>
              <TabsTrigger value="средняя" className="text-base py-3 px-6">Средняя группа (3-5 лет)</TabsTrigger>
              <TabsTrigger value="старшая" className="text-base py-3 px-6">Старшая группа (5-7 лет)</TabsTrigger>
            </TabsList>
            <TabsContent value="младшая" className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Программа для малышей</h3>
              <p className="mb-4">Адаптация к детскому коллективу, развитие мелкой моторики и базовых навыков.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-kindergarten-green/20 p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Icon name="Clock" className="mr-2" /> Режим дня
                  </h4>
                  <ul className="space-y-2">
                    <li>8:00 - 9:00 — Прием детей, утренняя гимнастика</li>
                    <li>9:00 - 9:30 — Завтрак</li>
                    <li>9:30 - 10:30 — Развивающие занятия</li>
                    <li>10:30 - 11:30 — Прогулка</li>
                    <li>11:30 - 12:00 — Обед</li>
                    <li>12:00 - 15:00 — Дневной сон</li>
                    <li>15:00 - 19:00 — Полдник, игры, прогулка, уход домой</li>
                  </ul>
                </div>
                <div className="bg-kindergarten-blue/20 p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Icon name="Sparkles" className="mr-2" /> Занятия
                  </h4>
                  <ul className="space-y-2">
                    <li>Развитие речи и общения</li>
                    <li>Сенсорное развитие</li>
                    <li>Музыкальные игры</li>
                    <li>Пальчиковая гимнастика</li>
                    <li>Знакомство с окружающим миром</li>
                    <li>Творческие активности</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="средняя" className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Программа для средней группы</h3>
              <p className="mb-4">Развитие коммуникативных навыков, логики, памяти, творческого мышления.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-kindergarten-green/20 p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Icon name="Clock" className="mr-2" /> Режим дня
                  </h4>
                  <ul className="space-y-2">
                    <li>8:00 - 9:00 — Прием детей, утренняя гимнастика</li>
                    <li>9:00 - 9:30 — Завтрак</li>
                    <li>9:30 - 11:00 — Развивающие занятия</li>
                    <li>11:00 - 12:00 — Прогулка</li>
                    <li>12:00 - 12:30 — Обед</li>
                    <li>12:30 - 15:00 — Дневной сон</li>
                    <li>15:00 - 19:00 — Полдник, игры, прогулка, уход домой</li>
                  </ul>
                </div>
                <div className="bg-kindergarten-blue/20 p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Icon name="Sparkles" className="mr-2" /> Занятия
                  </h4>
                  <ul className="space-y-2">
                    <li>Подготовка к чтению и письму</li>
                    <li>Логико-математическое развитие</li>
                    <li>Музыкальные занятия</li>
                    <li>Творчество и рисование</li>
                    <li>Физическое развитие</li>
                    <li>Групповые игры</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="старшая" className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Программа для старшей группы</h3>
              <p className="mb-4">Подготовка к школе, развитие самостоятельности, углубленное изучение окружающего мира.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-kindergarten-green/20 p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Icon name="Clock" className="mr-2" /> Режим дня
                  </h4>
                  <ul className="space-y-2">
                    <li>8:00 - 9:00 — Прием детей, утренняя гимнастика</li>
                    <li>9:00 - 9:30 — Завтрак</li>
                    <li>9:30 - 11:30 — Развивающие занятия</li>
                    <li>11:30 - 12:30 — Прогулка</li>
                    <li>12:30 - 13:00 — Обед</li>
                    <li>13:00 - 15:00 — Дневной сон</li>
                    <li>15:00 - 19:00 — Полдник, игры, прогулка, уход домой</li>
                  </ul>
                </div>
                <div className="bg-kindergarten-blue/20 p-4 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Icon name="Sparkles" className="mr-2" /> Занятия
                  </h4>
                  <ul className="space-y-2">
                    <li>Обучение чтению и письму</li>
                    <li>Математика и логика</li>
                    <li>Окружающий мир</li>
                    <li>Творчество и искусство</li>
                    <li>Подготовка к школе</li>
                    <li>Развитие коммуникативных навыков</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-kindergarten-pink/10">
        <div className="section-container">
          <h2 className="section-title">Галерея</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1526634215804-1d9280936cc5?q=80&w=1000" 
                  alt="Дети играют" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </CarouselItem>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1000" 
                  alt="Творческие занятия" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </CarouselItem>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=1000" 
                  alt="Игровая площадка" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </CarouselItem>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1547861417-ab06ffb39afc?q=80&w=1000" 
                  alt="Помещение детского сада" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-title">Отзывы родителей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Анна Петрова"
              role="Мама Миши, 4 года"
              text="Очень благодарна коллективу за внимательное отношение к детям. Мой сын с удовольствием ходит в сад и многому научился за этот год!"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
            />
            <TestimonialCard 
              name="Сергей Иванов"
              role="Папа Кати, 5 лет"
              text="Прекрасный садик с профессиональными воспитателями. Дочка стала более самостоятельной и общительной. Спасибо за ваш труд!"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
            />
            <TestimonialCard 
              name="Елена Смирнова"
              role="Мама близнецов Димы и Саши, 3 года"
              text="Замечательный детский сад! Дети ходят с удовольствием, много занятий, вкусная еда. Воспитатели находят подход к каждому ребенку."
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-kindergarten-green/10">
        <div className="section-container">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Контактная информация</h3>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <Icon name="MapPin" className="mr-3 text-primary" />
                      ул. Солнечная, 123, г. Москва
                    </p>
                    <p className="flex items-center">
                      <Icon name="Phone" className="mr-3 text-primary" />
                      +7 (123) 456-78-90
                    </p>
                    <p className="flex items-center">
                      <Icon name="Mail" className="mr-3 text-primary" />
                      info@солнышко-сад.рф
                    </p>
                    <p className="flex items-center">
                      <Icon name="Clock" className="mr-3 text-primary" />
                      Пн-Пт: 8:00 - 19:00
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Мы в социальных сетях</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-kindergarten-blue/20 rounded-full hover:bg-kindergarten-blue/40 transition-colors">
                      <Icon name="Facebook" />
                    </a>
                    <a href="#" className="p-3 bg-kindergarten-pink/20 rounded-full hover:bg-kindergarten-pink/40 transition-colors">
                      <Icon name="Instagram" />
                    </a>
                    <a href="#" className="p-3 bg-kindergarten-yellow/20 rounded-full hover:bg-kindergarten-yellow/40 transition-colors">
                      <Icon name="Send" />
                    </a>
                    <a href="#" className="p-3 bg-kindergarten-green/20 rounded-full hover:bg-kindergarten-green/40 transition-colors">
                      <Icon name="MessageCircle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Запись на экскурсию</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input type="text" className="w-full p-3 border rounded-lg" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input type="tel" className="w-full p-3 border rounded-lg" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Электронная почта</label>
                  <input type="email" className="w-full p-3 border rounded-lg" placeholder="example@mail.ru" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Возраст ребенка</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>2-3 года</option>
                    <option>3-5 лет</option>
                    <option>5-7 лет</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше сообщение</label>
                  <textarea className="w-full p-3 border rounded-lg h-32" placeholder="Напишите ваш вопрос или пожелание"></textarea>
                </div>
                <Button className="btn-primary w-full">Отправить заявку</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, color = "kindergarten-yellow" }) => (
  <Card className={`feature-card border-${color}`}>
    <CardContent className="pt-6">
      <div className={`w-16 h-16 rounded-full bg-${color}/30 flex items-center justify-center mb-4 mx-auto`}>
        <Icon name={icon} className={`text-${color} w-8 h-8`} />
      </div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

// Testimonial Card Component
const TestimonialCard = ({ name, role, text, image }) => (
  <Card className="feature-card border-kindergarten-green">
    <CardContent className="pt-6">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </CardContent>
  </Card>
);

export default Index;
