import { Facebook, Twitter, Youtube } from 'lucide-react';
import Logo from '../assets/footerIcon.png'; // Assuming your logo is in the assets folder

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-gray-300 py-6 md:py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
        
        {/* Logo */}
        <div className="mb-2 md:mb-4">
          <img src={Logo} alt="Ewig Energie Pvt LTD Logo" className="h-12 sm:h-14" />
        </div>
  
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base text-center">
          <a href="/home" className="hover:text-green-500 transition-colors">Home</a>
          <a href="/about" className="hover:text-green-500 transition-colors">About</a>
          <a href="/why-ewig" className="hover:text-green-500 transition-colors">Why EWIG</a>
          <a href="/services" className="hover:text-green-500 transition-colors">Services</a>
          <a href="/projects" className="hover:text-green-500 transition-colors">Projects</a>
          <a href="/contact" className="hover:text-green-500 transition-colors">Contact</a>
        </nav>
  
        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 pt-2">
          <p>&copy; Copyright EWIG 2025. All Right Reserved.</p>
        </div>
  
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
