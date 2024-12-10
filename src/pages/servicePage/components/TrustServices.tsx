import React from 'react';
import SepIcon from '@/components/SepIcon';
interface ServiceDescriptionProps {
  title: string;
  description: string;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 py-12 md:py-16 border-b border-gray-200 last:border-b-0">
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 relative">
          {title}
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary-600 hidden md:block"></div>
        </h2>
        <SepIcon className="mt-5"/>
      </div>
      <div className="w-full md:w-2/3">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const TrustServices: React.FC = () => {
  const services: ServiceDescriptionProps[] = [
    {
      title: "家族信托规划",
      description: "家族信托，旨在管理并保护家族财富，确保家族财产按照设定者的意愿世代传承，并且做到抵御潜在的财务风险。进行跨国资产分配方案设计，实现全球资产税务优化，同时提供有序的遗产规划的功能。家族财富教育和动态调整法律机制服务也包括其中。"
    },
    {
      title: "PPLI 保险私募基金设立",
      description: "全球高净值人士进行财富规划的核心保险解决方案，包括：基金结构设计、投资策略分析、风险评估、税务规划，保证严格遵守合格性和透明性，确保帮助客户在合法的框架之内进行税务优化、实现财产保值。"
    },
    {
      title: "创立慈善基金会",
      description: "成立非盈利性慈善组织是全球高净值人士进行财富管理和税务规划最主要的方法之一。我们的服务包括：慈善基金成立及结构设计、美国及其他国家地区慈善基金法律事务咨询、投资策略分析、风险评估、税务规划及投资者合格性及合规审核。"
    }
  ];

  return (
    <div className="min-h-screen custom-container">
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceDescription
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustServices;