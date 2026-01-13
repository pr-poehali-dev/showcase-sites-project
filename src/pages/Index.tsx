import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import SawCalculator from '@/components/SawCalculator';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const products = [
    {
      id: 1,
      title: 'Пильное полотно для ленточных пил',
      description: 'Производство высококачественного пильного полотна различных размеров для деревообработки',
      image: 'https://cdn.poehali.dev/projects/74bb08e9-a4eb-4380-a5d9-ebc0810344c0/files/929377ed-9907-4a95-941d-61765d7c1c55.jpg'
    },
    {
      id: 2,
      title: 'Заточка режущего инструмента',
      description: 'Профессиональная заточка строгальных ножей, дисковых пил, решёток для мясорубок, поварских ножей',
      image: 'https://cdn.poehali.dev/projects/74bb08e9-a4eb-4380-a5d9-ebc0810344c0/files/dc09f565-6fc4-4837-8048-56deb46b08b4.jpg'
    },
    {
      id: 3,
      title: 'Швейные столы',
      description: 'Изготовление профессиональных швейных столов для ателье и швейных производств',
      image: 'https://cdn.poehali.dev/projects/74bb08e9-a4eb-4380-a5d9-ebc0810344c0/files/929377ed-9907-4a95-941d-61765d7c1c55.jpg'
    }
  ];

  const certificates = [
    { id: 1, name: 'ISO 9001:2015', description: 'Система менеджмента качества' },
    { id: 2, name: 'ISO 14001:2015', description: 'Экологический менеджмент' },
    { id: 3, name: 'OHSAS 18001', description: 'Охрана труда и техника безопасности' }
  ];

  const advantages = [
    { icon: 'Award', title: 'Высокое качество', description: '30 лет опыта в производстве' },
    { icon: 'Clock', title: 'Точные сроки', description: 'Гарантированная поставка вовремя' },
    { icon: 'Shield', title: 'Надежность', description: 'Сертифицированная продукция' },
    { icon: 'Users', title: 'Профессионалы', description: 'Квалифицированные специалисты' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Factory" size={32} className="text-accent" />
            <span className="text-2xl font-bold text-primary">Технология</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
            <a href="#products" className="text-foreground hover:text-accent transition-colors">Продукция</a>
            <a href="#calculator" className="text-foreground hover:text-accent transition-colors">Калькулятор</a>
            <a href="#certificates" className="text-foreground hover:text-accent transition-colors">Сертификаты</a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Связаться с нами</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Пильное полотно и заточка инструмента
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Производство пильного полотна для ленточных пил, заточка режущего инструмента и изготовление швейных столов
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Каталог продукции
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/74bb08e9-a4eb-4380-a5d9-ebc0810344c0/files/dc09f565-6fc4-4837-8048-56deb46b08b4.jpg"
                alt="Производство"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="text-center hover-scale">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon name={item.icon} size={32} className="text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Технология — специализированное производственное предприятие с многолетним опытом работы. 
              Мы занимаемся производством пильного полотна для ленточных пил, профессиональной заточкой 
              режущего инструмента (строгальные ножи, дисковые пилы, решётки для мясорубок, поварские ножи) 
              и изготовлением швейных столов для швейного производства.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-accent" />
                </div>
                <CardTitle>Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Обеспечить предприятия деревообработки, общественного питания и швейного производства 
                  качественным инструментом и оборудованием
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Eye" size={24} className="text-accent" />
                </div>
                <CardTitle>Наше видение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Стать надежным партнером для производственных предприятий, 
                  предоставляя высококачественные услуги и продукцию
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-accent" />
                </div>
                <CardTitle>Наши ценности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Качество, надежность, инновации, ответственность перед клиентами 
                  и забота о сотрудниках
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Специализированные услуги и продукция для различных отраслей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <SawCalculator />
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Сертификаты качества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наша продукция соответствует международным стандартам качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/74bb08e9-a4eb-4380-a5d9-ebc0810344c0/files/595fc702-ac87-4782-a7fd-75a8c44cad48.jpg"
                alt="Сертификаты"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              {certificates.map((cert) => (
                <Card key={cert.id} className="border-l-4 border-l-accent">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="BadgeCheck" size={24} className="text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                        <CardDescription className="text-base mt-2">{cert.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы ответить на ваши вопросы и обсудить сотрудничество
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Адрес</CardTitle>
                      <CardDescription className="text-base mt-1">
                        г. Москва, ул. Промышленная, д. 45
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Телефон</CardTitle>
                      <CardDescription className="text-base mt-1">
                        +7 (495) 123-45-67
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Email</CardTitle>
                      <CardDescription className="text-base mt-1">
                        info@tehnologiya.ru
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Отправить
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" size={32} />
                <span className="text-2xl font-bold">Технология</span>
              </div>
              <p className="text-primary-foreground/80">
                Производство и обслуживание режущего инструмента
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Продукция</a></li>
                <li><a href="#certificates" className="hover:text-white transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@tehnologiya.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Режим работы</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 15:00</li>
                <li>Вс: Выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 Технология. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;