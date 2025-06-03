
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-outlook-50 via-white to-outlook-100 pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-outlook-100 text-outlook-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-korean">AI 기반 이메일 관리</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 animate-slide-up font-korean">
            outlook bot
            <span className="bg-gradient-to-r from-outlook-600 to-outlook-800 bg-clip-text text-transparent">
              도와드립니다
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in font-korean">
            김영희한테 온 메일 알려줘 - AI가 당신의 이메일을 스마트하게 관리하고 
            필요한 정보를 빠르게 찾아드립니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-outlook-600 hover:bg-outlook-700 text-white px-8 py-4 text-lg font-korean"
            >
              <Mail className="w-5 h-5 mr-2" />
              지금 시작하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-outlook-200 text-outlook-700 hover:bg-outlook-50 font-korean"
            >
              데모 보기
            </Button>
          </div>

          {/* Email Preview Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto animate-slide-up border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-xl mr-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 text-lg font-korean">김영희한테 온 메일 알려줘</h3>
                <p className="text-gray-500 text-sm font-korean">AI가 스마트하게 검색합니다</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-korean">
                  Z
                </span>
                <span className="text-gray-500 text-sm font-korean">8월 2일 (금) 오후</span>
              </div>
              <p className="text-gray-700 leading-relaxed font-korean">
                김영희 부장이 8월 2일 (금) 오후 반차로 자리를 비우다는 내용의 메일을 보냈습니다. 
                급한 용무는 이철수 휴대폰으로 연락해 달라고 했다고 했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
