import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Route, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Route, label: "Roadmaps", path: "/roadmaps" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col",
        "bg-white backdrop-blur-xl border-r border-gray-200",
        "transition-all duration-300 ease-in-out",
        isHovered ? "w-64" : "w-20"
      )}
    >
      <div
        className={`flex h-16 items-center ${
          isHovered ? "justify-center" : "justify-start"
        } px-3 py-2`}
      >
        <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent ml-3">
          L
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-2">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={cn(
              "flex items-center px-3 py-2 rounded-lg",
              "text-gray-600 hover:text-sky-600",
              "transition-all duration-300 ease-in-out",
              "hover:bg-sky-50 group"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span
              className={cn(
                "ml-3 overflow-hidden transition-all duration-300",
                !isHovered ? "w-0 opacity-0" : "w-32 opacity-100"
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
