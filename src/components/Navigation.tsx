import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: "/", label: "🏠 Главная", icon: "Home" },
    { path: "/page2", label: "📜 До букв", icon: "ScrollText" },
    { path: "/page3", label: "👨‍🏫 Герои азбуки", icon: "Users" },
    { path: "/page4", label: "✨ Волшебные азбуки", icon: "Sparkles" },
    { path: "/page5", label: "🚢 Буквы едут на Русь", icon: "Ship" },
    { path: "/page6", label: "🌿 Секрет бересты", icon: "Leaf" },
    { path: "/page7", label: "🎮 Игровая", icon: "Gamepad2" },
    { path: "/page8", label: "👩‍🏫 Для учителя", icon: "GraduationCap" },
  ];

  return (
    <nav className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg sticky top-0 z-50 border-b-2 border-amber-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📜</span>
            <span className="font-bold text-xl text-amber-800 font-serif">
              Русская Азбука
            </span>
          </div>

          <div className="hidden md:flex space-x-1">
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => navigate(page.path)}
                variant={location.pathname === page.path ? "default" : "ghost"}
                size="sm"
                className={`text-xs font-serif ${
                  location.pathname === page.path
                    ? "bg-amber-600 text-white"
                    : "text-amber-700 hover:bg-amber-100"
                }`}
              >
                {page.label}
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-amber-700">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
