import React from 'react';
import ServiceCard from './ServiceCard.tsx';
import { ServiceItem } from '../data';
import ContentBG from '@/assets/images/Service/contentBG.png';

const BusinessIntro: React.FC = () => {
  const services: ServiceItem[][] = [
    [
      {
        title: "新移民税务规划",
        items: [
          "税务居民和非税务居民区分",
          "移民前资产项目净值估价报告",
          "夫妻身份差异资产安排规划",
          "海外金融资产申报咨询"
        ]
      },
      {
        title: "外国人投资美国房地产",
        items: [
          "外国人房产房租税、买卖税务税费规划",
          "申请外国人税号(ITIN)",
          "注册外国人控股房地产公司",
          "提交8288预扣税退税"
        ]
      }
    ],
    [
      {
        title: "个人海外商务",
        items: [
          "海外所得收入豁免及申报",
          "跨境投资和股权申报",
          "境外税收抵免协议及申报",
          "养精税务筹划及申报"
        ]
      },
      {
        title: "企业国际税务",
        items: [
          "跨国公司税务架构设计",
          "国际定价转移税务规划",
          "国际租税协议分析及申报",
          "国际员工薪资税务",
          "企业赴美上市咨询及筹划"
        ]
      }
    ]
  ];

  return (
    <div className="min-h-screen custom-container">
      {/* Header Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={ContentBG}
            alt="Courthouse"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
            业务介绍
          </h1>
          <p className="text-base sm:text-lg text-center mx-auto leading-relaxed">
            我们的国际税务团队拥有丰富的经验和专业知识，能够为有意向打造扎实的企业和个人提供包括税务规划、税务合规、税务申报、税务争议解决等综合性服务。
          </p>
          <p className="text-base sm:text-lg text-center mx-auto mt-3 sm:mt-4 leading-relaxed">
            我们的国际税务服务覆盖范围涵盖美国、亚洲、欧洲等地，帮助客户应对全球化带来的复杂税务挑战。
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className=" pt-8 sm:pt-12 md:pt-16">
        <div className="space-y-8 md:space-y-12">
          {services.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12"
            >
              {row.map((service, index) => (
                <div 
                  key={index}
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  <ServiceCard className="h-full" {...service} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessIntro;