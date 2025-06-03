
import { Bot, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-outlook-500 to-outlook-700 p-2 rounded-xl">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-korean">
                OUTLOOK_BOT
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-outlook-600 transition-colors font-korean">
              기능
            </a>
            <a href="#about" className="text-gray-600 hover:text-outlook-600 transition-colors font-korean">
              소개
            </a>
            <a href="#contact" className="text-gray-600 hover:text-outlook-600 transition-colors font-korean">
              연락처
            </a>
            <Button className="bg-outlook-600 hover:bg-outlook-700 text-white font-korean">
              시작하기
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-outlook-600 transition-colors font-korean">
                기능
              </a>
              <a href="#about" className="text-gray-600 hover:text-outlook-600 transition-colors font-korean">
                소개
              </a>
              <a href="#contact" className="text-gray-600 hover:text-outlook-600 transition-colors font-korean">
                연락처
              </a>
              <Button className="bg-outlook-600 hover:bg-outlook-700 text-white font-korean w-full">
                시작하기
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
