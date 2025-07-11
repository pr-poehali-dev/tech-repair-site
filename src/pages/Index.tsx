import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    const phoneElement = document.querySelector("[data-phone]");

    contactSection?.scrollIntoView({ behavior: "smooth" });

    // Выделяем телефон с анимацией
    setTimeout(() => {
      if (phoneElement) {
        phoneElement.classList.add("animate-pulse");
        phoneElement.style.transform = "scale(1.05)";
        setTimeout(() => {
          phoneElement.classList.remove("animate-pulse");
          phoneElement.style.transform = "scale(1)";
        }, 2000);
      }
    }, 500);
  };

  const services = [
    {
      title: "Ремонт Телевизоров",
      description:
        "Профессиональный ремонт LCD, LED, OLED телевизоров. Замена матриц, блоков питания, материнских плат.",
      icon: "Monitor",
      price: "от 1500₽",
    },
    {
      title: "Ремонт Компьютеров",
      description:
        "Диагностика и ремонт ПК, ноутбуков. Чистка от пыли, замена комплектующих, установка ПО.",
      icon: "Laptop",
      price: "от 800₽",
    },
    {
      title: "Ремонт Смартфонов",
      description:
        "Замена экранов, батарей, разъемов. Восстановление после попадания влаги. Все модели.",
      icon: "Smartphone",
      price: "от 1200₽",
    },
  ];

  const reviews = [
    {
      name: "Анна Петровна",
      text: "Очень довольна! Телевизор Samsung отремонтировали за один день. Работает как новый!",
      rating: 5,
    },
    {
      name: "Сергей Михайлович",
      text: "Качественно починили ноутбук после залития. Цена честная, работают быстро.",
      rating: 5,
    },
    {
      name: "Елена Ивановна",
      text: "Заменили экран на iPhone. Мастер объяснил всё понятно, гарантию дали.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={28} className="text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ТехноРемонт
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
              >
                О нас
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Ремонт
            </span>
            <br />
            <span className="text-gray-800">Цифровой Техники</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Профессиональный ремонт телевизоров, компьютеров и смартфонов.
            <br />
            Быстро, качественно, с гарантией.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать мастера
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Наши Услуги
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Ремонтируем любую цифровую технику с гарантией качества
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg"
                  >
                    Заказать ремонт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  О нас
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Мы — команда опытных мастеров с более чем 10-летним стажем в
                ремонте цифровой техники.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-green-500"
                  />
                  <span className="text-lg text-gray-700">
                    Гарантия на все виды работ
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} className="text-blue-500" />
                  <span className="text-lg text-gray-700">
                    Быстрый ремонт — от 30 минут
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={24} className="text-purple-500" />
                  <span className="text-lg text-gray-700">
                    Оригинальные запчасти
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Home" size={24} className="text-orange-500" />
                  <span className="text-lg text-gray-700">Выезд на дом</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl overflow-hidden">
                <img
                  src="/img/2b2e1ade-e30c-4a4f-acba-fa43c1c97e29.jpg"
                  alt="Профессиональный ремонт техники"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Отзывы Клиентов
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Нам доверяют тысячи довольных клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <CardTitle className="text-xl text-gray-800">
                    {review.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Готовы помочь с ремонтом вашей техники прямо сейчас
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={32} className="text-white" />
                <a
                  href="tel:89081750904"
                  data-phone
                  className="text-3xl font-bold text-white hover:text-blue-200 transition-all duration-300"
                >
                  8 (908) 175-09-04
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Wrench" size={24} className="text-blue-400" />
            <span className="text-xl font-bold">ТехноРемонт</span>
          </div>
          <p className="text-gray-400 mb-4">
            Профессиональный ремонт цифровой техники с гарантией
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Clock" size={20} className="text-gray-400" />
            <span className="text-gray-400">
              Работаем ежедневно с 9:00 до 21:00
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
