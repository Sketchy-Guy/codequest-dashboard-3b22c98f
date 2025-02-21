
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
  Rocket
} from "lucide-react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/266feaba-b8d4-4b71-ab68-64232840d392.png" 
            alt="TECHXERA" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-white">
            TECHXERA
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/courses" className="text-sm font-medium text-gray-200 transition-colors hover:text-white">
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Learn
            </span>
          </Link>
          <Link to="/hackathons" className="text-sm font-medium text-gray-200 transition-colors hover:text-white">
            <span className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Hackathons
            </span>
          </Link>
          <Link to="/practice" className="text-sm font-medium text-gray-200 transition-colors hover:text-white">
            <span className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Practice
            </span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <MoreVertical className="h-5 w-5 text-gray-200" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-black/95 border-gray-800">
              <DropdownMenuItem asChild>
                <Link to="/resume-builder" className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Resume Builder
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/application-tracker" className="flex items-center">
                  <Rocket className="mr-2 h-4 w-4" />
                  Application Tracker
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/resources" className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Resources
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-4">
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
            <DropdownMenuContent align="end" className="w-48 bg-black/95 border-gray-800">
              <Link to="/dashboard">
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </Link>
              <Link to="/settings">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
              </Link>
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
