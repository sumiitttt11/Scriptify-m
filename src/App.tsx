import React, { useState } from 'react';
import { PenTool,Instagram, Linkedin, Github, FileText, Sparkles, ArrowRight, Check, Menu, X, Star, Zap, Shield } from 'lucide-react';
// import { PenTool, Instagram, Linkedin, Github } from "lucide-react"; // Import icons

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
              <PenTool className="h-8 w-8 text-purple-500" />
              <a 
                href="/" 
                className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
              >
                Scriptify
              </a>
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="https://scriptify-b.vercel.app/">
                <button 
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Get Started
                </button>
              </a>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 border-b border-white/10">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button 
                className="w-full mt-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg"
                onClick={() => window.open('/convert', '_blank')}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-8">
              <Zap className="h-4 w-4 mr-2" />
              Transform your text instantly
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-500 text-transparent bg-clip-text">
              Digital Text to
              <br />
              Beautiful Handwriting
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Add a personal touch to your documents with Scriptify. Convert any digital text into 
              natural-looking handwritten content in seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://scriptify-lake.vercel.app/" 
                className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 w-full sm:w-auto flex items-center justify-center"
              >
                Get Started Free
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </a>

              <a 
                href="#demo" 
                className="px-8 py-4 text-lg font-medium bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1M+</div>
                <div className="text-gray-400">Documents Converted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Handwriting Styles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-400">User Rating</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to transform your digital text into beautiful handwriting
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Natural Looking</h3>
              <p className="text-gray-400">
                Advanced algorithms ensure your text looks authentically handwritten
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 mb-6">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multiple Styles</h3>
              <p className="text-gray-400">
                Choose from various handwriting styles to match your preference
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
              <p className="text-gray-400">
                Your documents are processed securely and never stored
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-8">
                Live Preview
              </div>
              <h2 className="text-4xl font-bold mb-6">See it in Action</h2>
              <p className="text-gray-400 mb-8">
                Watch how Scriptify transforms your digital text into beautiful handwriting in real-time. 
                Perfect for adding a personal touch to letters, notes, and documents.
              </p>
              <div className="space-y-4">
                {['Instant conversion', 'Multiple handwriting styles', 'Export to PDF'].map((feature) => (
                  <div key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 rounded-2xl">
                <div className="bg-black rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?auto=format&fit=crop&w=800&q=80"
                    alt="Handwriting Sample"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Logo Section */}
            <div className="flex items-center mb-4 md:mb-0">
              <PenTool className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Scriptify
              </span>
            </div>
            
            {/* Social Icons Section */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://instagram.com/sumiiitt.af" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-500 transition-all" />
              </a>
              <a href="https://www.linkedin.com/in/sumiitttt11/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-500 transition-all" />
              </a>
              <a href="https://github.com/sumiitttt11" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-400 hover:text-white transition-all" />
              </a>
            </div>

            {/* Copyright Section */}
            <div className="text-gray-400">
              © {new Date().getFullYear()} Scriptify. All rights reserved.
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
