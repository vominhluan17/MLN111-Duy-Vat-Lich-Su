import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Card } from '../components/ui/Card';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function Content({ setCurrentPage }) {
  const [expandedSection, setExpandedSection] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentSections = {
    overview: {
      title: 'Tổng Quan Đề Tài',
      content: (
        <div className="space-y-8">
          <p className="text-xl text-secondary leading-relaxed">
            Sinh viên ngày nay có điều kiện sống cao hơn, tiếp cận quốc tế nhiều hơn. Nhiều giá trị cũ đang bị chất vấn, nhường chỗ cho những giá trị mới hiện đại.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-accent font-bold mb-4 uppercase tracking-wider text-sm">Cơ Sở Hạ Tầng</h3>
              <p className="text-secondary">Trình độ phát triển kinh tế - xã hội quyết định các điều kiện vật chất sản xuất.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-purple-400 font-bold mb-4 uppercase tracking-wider text-sm">Kiến Trúc Thượng Tầng</h3>
              <p className="text-secondary">Tư tưởng, lối sống và hệ giá trị tinh thần của xã hội.</p>
            </div>
          </div>
        </div>
      )
    },
    theory: {
      title: 'Lý Thuyết Duy Vật Lịch Sử',
      content: (
        <div className="space-y-8">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-6">Mối Quan Hệ Biện Chứng</h3>
            <div className="flex items-center justify-center gap-8">
              <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">Cơ Sở Hạ Tầng</div>
              <ChevronRight className="text-accent" />
              <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">Kiến Trúc Thượng Tầng</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Thành Phần Quyết Định:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Điều kiện vật chất', 'Quan hệ sản xuất', 'Lực lượng sản xuất', 'Phương thức sản xuất'].map(item => (
                <li key={item} className="flex items-center gap-3 text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    oldValues: {
      title: 'Giá Trị Truyền Thống',
      content: (
        <div className="grid grid-cols-1 gap-6">
          {[
            { name: '"An Phận"', desc: "Chấp nhận số phận, hài lòng với hiện tại trong bối cảnh nông nghiệp phụ thuộc thiên nhiên." },
            { name: '"Nghe Lời Cha Mẹ"', desc: "Tuyệt đối tuân theo cấp bậc gia đình khi gia đình là đơn vị sản xuất cơ bản." },
            { name: '"Ổn Định Là Tốt"', desc: "Ưu tiên an toàn, tránh mạo hiểm trong kỷ nguyên kinh tế công nghiệp cũ." }
          ].map((val, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
              <h4 className="text-xl font-bold mb-2">{val.name}</h4>
              <p className="text-secondary leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    newValues: {
      title: 'Giá Trị Mới Nổi',
      content: (
        <div className="grid grid-cols-1 gap-6">
          {[
            { name: "Tự Do Cá Nhân", desc: "Quyền lựa chọn lối sống khi GDP tăng và nhu cầu sinh tồn cơ bản đã được thỏa mãn." },
            { name: "Đa Dạng Giới", desc: "Tôn trọng bản sắc cá nhân khi công việc không còn phụ thuộc vào sức mạnh thể chất." },
            { name: "Cân Bằng Cuộc Sống", desc: "Nhu cầu tự thực hiện bản thân và hạnh phúc tinh thần thay vì chỉ làm việc để sống sót." }
          ].map((val, i) => (
            <div key={i} className="p-8 rounded-3xl bg-accent/5 border border-accent/10 hover:border-accent/50 transition-colors">
              <h4 className="text-xl font-bold text-accent mb-2">{val.name}</h4>
              <p className="text-secondary leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    analysis: {
      title: 'Phân Tích Biện Chứng',
      content: (
        <div className="space-y-12">
          <div className="relative border-l-2 border-white/10 pl-8 space-y-12">
            {[
              { year: "Trước 1950", title: "Xã Hội Nông Nghiệp", desc: "Cơ sở hạ tầng yếu kém → Giá trị an phận, phục tùng chiếm ưu thế." },
              { year: "1950 - 2000", title: "Xã Hội Công Nghiệp", desc: "Bắt đầu chuyển đổi, xuất hiện mâu thuẫn giữa tập thể và cá nhân." },
              { year: "2000 - Nay", title: "Kỷ Nguyên Thông Tin", desc: "Kinh tế tri thức → Tự do cá nhân và đổi mới sáng tạo trở thành cốt lõi." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <span className="text-accent font-bold text-sm uppercase tracking-widest">{step.year}</span>
                <h4 className="text-2xl font-bold mt-2 mb-4">{step.title}</h4>
                <p className="text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    conclusion: {
      title: 'Kết Luận & Ứng Dụng',
      content: (
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h4 className="text-xl font-bold mb-6">Bài Học Rút Ra:</h4>
            <ul className="space-y-4">
              {[
                "Cơ sở hạ tầng luôn là nhân tố quyết định hệ giá trị xã hội.",
                "Giá trị cũ không mất đi mà thích nghi và biến đổi theo thời đại.",
                "Sự xung đột thế hệ là kết quả tất yếu của phát triển kinh tế không đồng bộ."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-secondary leading-relaxed">
                  <span className="text-accent font-bold">{i + 1}.</span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar setCurrentPage={setCurrentPage} />

      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <Sidebar 
            activeSection={expandedSection} 
            setExpandedSection={setExpandedSection} 
          />

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={expandedSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-12">
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-6 group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                    Quay lại trang chủ
                  </button>
                  <h1 className="text-5xl font-bold tracking-tight mb-4">
                    {contentSections[expandedSection].title}
                  </h1>
                  <div className="w-20 h-1 bg-accent rounded-full" />
                </div>

                <div className="luxury-card p-12">
                  {contentSections[expandedSection].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
