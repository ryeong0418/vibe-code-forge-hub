
import { Bot, Mail, MessageCircle, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-outlook-500 to-outlook-700 p-2 rounded-xl">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-korean">OUTLOOK_BOT</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed font-korean">
              AI 기반 이메일 관리 서비스로 더 스마트하고 효율적인 이메일 경험을 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-korean">빠른 링크</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors font-korean">기능</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors font-korean">소개</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-korean">가격</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-korean">고객지원</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-korean">연락처</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 font-korean">이메일: help@outlookbot.kr</li>
              <li className="text-gray-400 font-korean">전화: 02-1234-5678</li>
              <li className="text-gray-400 font-korean">주소: 서울시 강남구</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-korean">
            © 2024 OutlookBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
