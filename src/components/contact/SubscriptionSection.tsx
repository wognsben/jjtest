import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function SubscriptionSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] text-[#363636] leading-[1.4]">
                <strong>C:ing project</strong>의 새로운 소식을<br />
                가장 먼저 받는 방법!
              </h2>
            </div>

            <div className="space-y-2 text-[#555555]">
              <p>카카오톡 채널에서 'Cing'을 검색, 채널 추가하면</p>
              <p>프로젝트 오픈 소식을 가장 먼저 받을 수 있어요.</p>
            </div>

            <div className="pt-4">
              <a
                href="https://pf.kakao.com/_ELTxcK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>카톡에서 Cing project 채널 추가</span>
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[545/386] bg-gradient-to-br from-[#7CB342]/10 to-[#6B4423]/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-12 h-12 text-[#7CB342]" />
                </div>
                <p className="text-[#6B4423]/60">카카오톡 채널</p>
                <p className="text-[#6B4423] mt-2">C:ing project</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

