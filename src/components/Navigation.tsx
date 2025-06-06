import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: "/", label: "🏠 Главная", icon: "Home" },
    { path: "/page2", label: "🎯 Игры", icon: "Target" },
    { path: "/page3", label: "📖 Истории", icon: "Book" },
    { path: "/page4", label: "🧩 Пазлы", icon: "Puzzle" },
    { path: "/page5", label: "⏰ История", icon: "Clock" },
    { path: "/page6", label: "📷 Галерея", icon: "Camera" },
    { path: "/page7", label: "🎮 Игровая", icon: "Gamepad2" },
    { path: "/page8", label: "📝 Контакты", icon: "MessageCircle" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-xl text-purple-600 font-rubik">
              КосмоДети
            </span>
          </div>

          <div className="hidden md:flex space-x-2">
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => navigate(page.path)}
                variant={location.pathname === page.path ? "default" : "ghost"}
                size="sm"
                className="text-sm font-open-sans"
              >
                {page.label}
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
