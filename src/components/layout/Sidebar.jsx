import { motion } from 'framer-motion';
import { BookOpen, Globe, Gamepad2, Layers, Cpu, Users } from 'lucide-react';

export const Sidebar = ({ activeSection, setExpandedSection }) => {
  const sections = [
    { id: 'overview', name: 'Tổng Quan', icon: BookOpen },
    { id: 'theory', name: 'Lý Thuyết', icon: Layers },
    { id: 'oldValues', name: 'Giá Trị Cũ', icon: Users },
    { id: 'newValues', name: 'Giá Trị Mới', icon: Cpu },
    { id: 'analysis', name: 'Phân Tích', icon: Globe },
    { id: 'conclusion', name: 'Kết Luận', icon: Gamepad2 },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 h-[calc(100vh-120px)] sticky top-24">
      <div className="glass-panel rounded-3xl p-4 flex flex-col gap-2">
        <div className="px-4 py-2 mb-2">
          <h3 className="text-xs font-bold text-secondary uppercase tracking-widest">Mục Lục</h3>
        </div>
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => setExpandedSection(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
              activeSection === item.id 
                ? 'bg-white text-black' 
                : 'text-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'text-black' : 'text-secondary group-hover:text-white'}`} />
            <span className="font-medium text-sm">{item.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};
