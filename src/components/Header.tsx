
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  User, 
  Settings, 
  LogOut, 
  Moon, 
  Sun, 
  Briefcase, 
  Trophy, 
  FileText,
  GraduationCap,
  BookOpen,
  MoreVertical,
  Code,
  Rocket,
  Menu,
  X
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { icon: GraduationCap, label: "Learn", href: "/courses" },
    { icon: Trophy, label: "Hackathons", href: "/hackathons" },
    { icon: Code, label: "Practice", href: "/practice" },
    { icon: Briefcase, label: "Resume Builder", href: "/resume-builder" },
    { icon: Rocket, label: "Application Tracker", href: "/application-tracker" },
    { icon: BookOpen, label: "Resources", href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/266feaba-b8d4-4b71-ab68-64232840d392.png" 
            alt="TECHXERA" 
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <span className="text-xl sm:text-2xl font-bold text-white hidden sm:inline">
            TECHXERA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-200 rounded-md hover:bg-white/10 transition-colors"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <MoreVertical className="h-5 w-5 text-gray-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-black/95 border-gray-800">
              {navItems.slice(3).map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="flex items-center">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-black/95 border-r border-gray-800 p-0">
            <SheetHeader className="p-4 border-b border-gray-800">
              <SheetTitle className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/266feaba-b8d4-4b71-ab68-64232840d392.png" 
                  alt="TECHXERA" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-white">TECHXERA</span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-gray-200" />
            ) : (
              <Moon className="h-4 w-4 text-gray-200" />
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
              >
                <User className="h-5 w-5 text-gray-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-black/95 border-gray-800">
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
