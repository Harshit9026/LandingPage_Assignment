import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header({ onStartTrial }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">TopMindCare</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About
            </a>
            <a href="#programs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Programs
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={onStartTrial}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transform hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-4 py-2">
                About
              </a>
              <a href="#programs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-4 py-2">
                Programs
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-4 py-2">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-4 py-2">
                Contact
              </a>
              <div className="px-4 py-2">
                <Button 
                  onClick={onStartTrial}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}