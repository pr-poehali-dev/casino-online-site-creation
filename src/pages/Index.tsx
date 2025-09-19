import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const bonuses = [
    {
      title: "Приветственный бонус",
      description: "100% на первый депозит до 50,000₽",
      icon: "Gift",
      amount: "50,000₽",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Фриспины",
      description: "200 бесплатных вращений в популярных слотах",
      icon: "Zap",
      amount: "200 FS",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Кэшбэк",
      description: "10% возврат средств каждую неделю",
      icon: "ArrowLeft",
      amount: "10%",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "VIP программа",
      description: "Эксклюзивные привилегии для постоянных игроков",
      icon: "Crown",
      amount: "VIP",
      color: "text-casino-gold",
      bgColor: "bg-yellow-500/10"
    }
  ];

  const games = [
    {
      title: "Слоты",
      description: "Более 2000 игровых автоматов",
      image: "/img/210eb37c-0c51-453e-a40b-441935e26d17.jpg",
      count: "2000+"
    },
    {
      title: "Рулетка",
      description: "Классическая и европейская рулетка",
      image: "/img/f8783f84-a500-4131-aae2-0168a0e05146.jpg",
      count: "Live"
    },
    {
      title: "Покер",
      description: "Техасский холдем и другие виды покера",
      image: "/img/e44918b2-7c35-4789-bca3-39309e2632b1.jpg",
      count: "24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Subtle Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg premium-gradient flex items-center justify-center elegant-shadow">
                <Icon name="Diamond" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-primary">
                PREMIUM CASINO
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-primary text-primary">
                ONLINE: 12,847
              </Badge>
              <Button 
                className="premium-gradient text-white font-bold elegant-shadow elegant-hover"
                onClick={() => window.open('https://ezca.sh/r/kj8Ds5', '_blank')}
              >
                ИГРАТЬ СЕЙЧАС
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-6 premium-text">
            ЭЛИТНОЕ КАЗИНО
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к премиум-игрокам. Лучшие игры, 
            честные выплаты и профессиональный сервис.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Button 
              size="lg" 
              className="premium-gradient text-white font-bold text-lg px-8 py-4 elegant-shadow elegant-hover"
              onClick={() => window.open('https://ezca.sh/r/kj8Ds5', '_blank')}
            >
              <Icon name="Play" size={20} className="mr-2" />
              НАЧАТЬ ИГРУ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 elegant-hover"
              onClick={() => window.open('https://ezca.sh/r/kj8Ds5', '_blank')}
            >
              <Icon name="Gift" size={20} className="mr-2" />
              ПОЛУЧИТЬ БОНУС
            </Button>
          </div>
          
          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/70 backdrop-blur-sm border-primary/20 elegant-shadow animate-elegant-float">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  ₽{(Math.random() * 10000000 + 5000000).toLocaleString('ru-RU')}
                </div>
                <p className="text-muted-foreground">Выплачено сегодня</p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-sm border-secondary/20 elegant-shadow animate-elegant-float" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {Math.floor(Math.random() * 1000 + 500)}
                </div>
                <p className="text-muted-foreground">Джекпотов за неделю</p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-sm border-accent/20 elegant-shadow animate-elegant-float" style={{ animationDelay: '1s' }}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  98.7%
                </div>
                <p className="text-muted-foreground">RTP всех игр</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-secondary">
              БОНУСЫ И АКЦИИ
            </h3>
            <p className="text-xl text-muted-foreground">
              Получите максимум от каждой игры с нашими щедрыми предложениями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <Card 
                key={index}
                className={`${bonus.bgColor} backdrop-blur-sm border-2 border-current/20 elegant-shadow elegant-hover animate-elegant-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${bonus.bgColor} flex items-center justify-center mb-4 elegant-shadow`}>
                    <Icon name={bonus.icon as any} size={32} className={bonus.color} />
                  </div>
                  <CardTitle className={`${bonus.color} text-lg`}>
                    {bonus.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {bonus.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className={`text-3xl font-bold ${bonus.color} mb-4`}>
                    {bonus.amount}
                  </div>
                  <Button 
                    variant="outline" 
                    className={`w-full border-current ${bonus.color} hover:bg-current/10 elegant-hover`}
                    onClick={() => window.open('https://ezca.sh/r/kj8Ds5', '_blank')}
                  >
                    ПОЛУЧИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-accent">
              ПОПУЛЯРНЫЕ ИГРЫ
            </h3>
            <p className="text-xl text-muted-foreground">
              Тысячи игр от ведущих провайдеров мира
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card 
                key={index}
                className="bg-card/70 backdrop-blur-sm border-border elegant-shadow overflow-hidden elegant-hover group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <Badge 
                    className="absolute top-4 right-4 accent-gradient text-white font-bold"
                  >
                    {game.count}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-2 text-primary">
                    {game.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {game.description}
                  </p>
                  <Button 
                    className="w-full premium-gradient text-white font-bold elegant-shadow elegant-hover"
                    onClick={() => window.open('https://ezca.sh/r/kj8Ds5', '_blank')}
                  >
                    ИГРАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border backdrop-blur-sm bg-background/80 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center elegant-shadow">
                  <Icon name="Diamond" size={16} className="text-white" />
                </div>
                <span className="text-lg font-bold text-primary">
                  PREMIUM CASINO
                </span>
              </div>
              <p className="text-muted-foreground">
                Лицензированное онлайн-казино с честной игрой и быстрыми выплатами.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-3 text-secondary">ИГРЫ</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Слоты</li>
                <li>Рулетка</li>
                <li>Блэкджек</li>
                <li>Покер</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-3 text-accent">ПОДДЕРЖКА</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Чат 24/7</li>
                <li>Email</li>
                <li>Телефон</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-3 text-casino-gold">БЕЗОПАСНОСТЬ</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>SSL шифрование</li>
                <li>Лицензия</li>
                <li>Ответственная игра</li>
                <li>18+</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PREMIUM CASINO. Все права защищены. Играйте ответственно.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;