import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Play, BookOpen, Globe, Lightbulb } from 'lucide-react';

export default function AcademicLayout({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent/30">
      <Navbar setCurrentPage={setCurrentPage} />

      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Học Phần: Triết Học Mác - Lênin</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-gradient"
          >
            Duy Vật Lịch Sử <br /> & Thế Hệ Trẻ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-secondary max-w-2xl mx-auto mb-12"
          >
            Khám phá mối quan hệ biện chứng giữa Cơ sở hạ tầng và Kiến trúc thượng tầng trong bối cảnh chuyển dịch hệ giá trị của sinh viên hiện đại.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button onClick={() => setCurrentPage('content')} className="flex items-center gap-2">
              Bắt đầu nghiên cứu <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" onClick={() => setCurrentPage('game')} className="flex items-center gap-2">
              Trò chơi ôn tập <Play className="w-4 h-4 fill-current" />
            </Button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            {
              title: "Cơ Sở Hạ Tầng",
              desc: "Phân tích sự chuyển đổi từ xã hội nông nghiệp sang kinh tế thị trường hiện đại.",
              icon: Globe,
              color: "text-blue-400"
            },
            {
              title: "Kiến Trúc Thượng Tầng",
              desc: "Các giá trị truyền thống đang bị chất vấn và sự trỗi dậy của tư tưởng mới.",
              icon: BookOpen,
              color: "text-purple-400"
            },
            {
              title: "Giá Trị Mới",
              desc: "Tự do cá nhân, đa dạng giới và sự cân bằng công việc - cuộc sống.",
              icon: Lightbulb,
              color: "text-amber-400"
            }
          ].map((feature, i) => (
            <Card key={i} delay={i * 0.1}>
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </section>

        {/* Video Highlight Section */}
        <section className="max-w-7xl mx-auto mb-32">
          <Card className="overflow-hidden p-0 border-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="text-accent font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-accent" /> Thực Tiễn Xã Hội
                </div>
                <h2 className="text-4xl font-bold mb-6">Câu chuyện Làng Vĩnh An</h2>
                <p className="text-secondary text-lg mb-8 leading-relaxed">
                  Minh hoạ mâu thuẫn giữa giá trị "ổn định" truyền thống và sự trỗi dậy của nhu cầu tự do ở thế hệ trẻ qua lăng kính duy vật lịch sử.
                </p>
                <Button variant="secondary" className="w-fit" onClick={() => setCurrentPage('content')}>
                  Xem chi tiết phân tích
                </Button>
              </div>
              <div className="aspect-video bg-surface/50">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5wPtaLLdQKk" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer Minimal */}
        <footer className="max-w-7xl mx-auto border-t border-border pt-12 text-center text-secondary text-sm">
          <p>© 2026 Học Viện Triết Học. Thiết kế bởi Duy Vật Lịch Sử Team.</p>
        </footer>
      </main>
    </div>
  );
}
