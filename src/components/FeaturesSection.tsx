
import { Search, Brain, Clock, Shield, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "스마트 검색",
    description: "자연어로 이메일을 검색하세요. '김영희한테 온 메일'처럼 말하면 AI가 찾아드립니다.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Brain,
    title: "AI 요약",
    description: "긴 이메일 스레드를 한 번에 요약해서 핵심 내용만 빠르게 파악할 수 있습니다.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Clock,
    title: "자동 일정 관리",
    description: "이메일 속 일정을 자동으로 인식하고 캘린더에 추가해드립니다.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Shield,
    title: "스팸 차단",
    description: "고급 AI 필터링으로 스팸과 피싱 메일을 99.9% 차단합니다.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Users,
    title: "팀 협업",
    description: "팀원들과 이메일을 공유하고 함께 관리할 수 있습니다.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Zap,
    title: "즉시 응답",
    description: "AI가 문맥을 파악해서 적절한 답장 초안을 자동으로 작성해드립니다.",
    color: "bg-indigo-100 text-indigo-600"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-korean">
            왜 OutlookBot을 선택해야 할까요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-korean">
            AI 기술로 이메일 관리를 혁신하고, 생산성을 높이는 다양한 기능을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-korean">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-korean">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
