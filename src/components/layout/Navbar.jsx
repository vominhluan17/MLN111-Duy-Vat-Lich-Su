import { motion } from 'framer-motion';
import { Menu, X, Globe, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">Học Viện Triết Học</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Lý Luận', page: 'content' },
            { name: 'Thực Tiễn', page: 'content' },
            { name: 'Trò Chơi', page: 'game' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.page)}
              className="text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-secondary hover:text-white transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button 
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 glass-panel rounded-3xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {[
              { name: 'Lý Luận', page: 'content' },
              { name: 'Thực Tiễn', page: 'content' },
              { name: 'Trò Chơi', page: 'game' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsOpen(false);
                }}
                className="text-left py-2 text-lg font-medium text-secondary hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
