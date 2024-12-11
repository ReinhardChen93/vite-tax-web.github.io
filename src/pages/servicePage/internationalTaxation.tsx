import React from "react";
import AnimationRevealPage from "@/components/helpers/AnimationRevealPage";
import BannerBg from "@/assets/images/Service/Banner.png";
import TitleIcon from "@/assets/images/Service/TitleIcon.png";
import BusinessIntro from "./components/BusinessIntro";
import BlogCard from "@/components/BlogCard";
import TrustServices from './components/TrustServices';
import Case1 from '@/assets/images/Service/case1.png';

import styled from "styled-components";

interface HeaderBoxProps {
  src: string;
}

const InternationalTaxationPage: React.FC = () => {
  const HeaderBox = styled.div<HeaderBoxProps>`
    background-image: url("${(props) => props.src}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  // 首先定义博客卡片数据数组
  const blogCards = [
    {
      date: "18-08-2020",
      title: "移民前税务筹划",
      description: "There are of Lorem Ipsum available, but majority have su alteration in some form, by injected air which don't look even slightly believable.",
      imageUrl: Case1,
      className: " bg-blueSsecondary",
      url: '/lawCase/:14367'
    },
    {
      date: "18-08-2020",
      title: "移民前税务筹划",
      description: "There are of Lorem Ipsum available, but majority have su alteration in some form, by injected air which don't look even slightly believable.",
      imageUrl: Case1,
      className: " bg-blueSsecondary",
      url: '/lawCase/:14367'
    }
  ]

  return (
    <AnimationRevealPage>
      <HeaderBox
        className="w-full h-56 sm:h-[43.563rem]  flex flex-col justify-end"
        src={BannerBg}
      >
        <div className="flex h-full flex-col justify-end items-center space-y-4 pb-5 sm:pb-32">
          {/* 标题文字 - 添加响应式字体大小 */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            国际税务
          </div>

          {/* 装饰线条 - 添加响应式大小 */}
          <img
            className="w-[4rem] sm:w-[4.5rem] md:w-[5rem] lg:w-[5.938rem] h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] lg:h-[2.75rem]"
            src={TitleIcon}
          />
        </div>
      </HeaderBox>
      <BusinessIntro />
      <TrustServices />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 custom-container">
      {/* 使用 map 方法渲染卡片 */}
        {blogCards.map((card, index) => (
          <BlogCard
            key={index}
            date={card.date}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            className={card.className}
            url={card.url}
          />
        ))}
      </div>
    </AnimationRevealPage>
  );
};

export default InternationalTaxationPage;
