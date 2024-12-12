import React from "react";
import Banner_home from "@/assets/banner/banner_home.png";
import SepIcon from "@/components/SepIcon";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import styled from "styled-components";
import { DotButton, useDotButton } from "./DotButton";

const Banner: React.FC = () => {
  // 1. 初始化 carousel

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  interface HeaderBoxProps {
    src: string;
  }
  const HeaderBox = styled.div<HeaderBoxProps>`
    background-image: url("${(props) => props.src}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  // 2. 使用 useDotButton hook
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api,
    // 可选的点击回调
    (_api) => {
      // console.log("Dot clicked, current index:", _api.selectedScrollSnap());
    }
  );
  
  return (
    <div className="overflow-hidden">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <HeaderBox
              className="relative flex flex-col justify-center box-border w-full min-h-[25.9375rem] md:min-h-screen p-5 md:p-10 lg:p-16 3xl:px-[16.25rem] "
              src={Banner_home}
            >
              <div className="box-border w-full h-full flex flex-col justify-center">
                <SepIcon />
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-[4rem] mt-4 md:mt-6 lg:mt-8 xl:mt-[3.75rem]">
                  成立您的家族办公室
                </h1>
                <p className="text-taxSecondary text-sm md:text-base lg:text-lg xl:text-[1.375rem] mt-2 md:mt-3 lg:mt-4 xl:mt-[1.75rem] max-w-2xl">
                  家办旨在为超级富豪及其家人处理所有财务事务，包括从投资管理
                  到账单支付、税务规划、资助慈善事业和子女教育等。
                </p>
                <button
                  type="button"
                  className="text-white border w-fit border-white bg-white bg-opacity-10 mt-4 md:mt-6 lg:mt-8 xl:mt-[2.625rem] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-[5.125rem] xl:py-[1.8125rem] text-sm md:text-base lg:text-lg xl:text-[1.375rem]"
                >
                  了解更多
                </button>
              </div>
            </HeaderBox>
          </CarouselItem>
          <CarouselItem>
            <div className="h-[160px] flex items-center justify-center bg-[#364d79] text-white">
              2
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-[160px] flex items-center justify-center bg-[#364d79] text-white">
              3
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-[160px] flex items-center justify-center bg-[#364d79] text-white">
              4
            </div>
          </CarouselItem>
        </CarouselContent>

        <div
          className="grid grid-cols-[auto_1fr] justify-between gap-3 absolute 
            left-5 top-[90%] 
            xl:left-[16.25rem]
            lg:left-16
            md:left-10
            xs:top-[80%]
          "
        >
          <div className="flex flex-wrap justify-end items-center -mr-2">
            {[1, 2, 3, 4, 5].map((number, index) => (
              <DotButton
                key={number}
                onClick={() => onDotButtonClick(index)}
                className={`
                  w-10 h-10
                  md:w-8 md:h-8
                  xs:w-6 xs:h-6
                  flex items-center justify-center 
                  rounded-full 
                  cursor-pointer 
                  touch-manipulation 
                  appearance-none
                  p-0 m-0 border-0 
                  bg-transparent
                  relative
                  after:content-[''] 
                  after:absolute 
                  after:w-5 after:h-5
                  md:after:w-4 md:after:h-4
                  xs:after:w-3 xs:after:h-3
                  after:rounded-full 
                  after:flex 
                  after:items-center
                  after:bg-white
                  ${index + 1 === current && "after:!bg-taxSecondary"}
                `}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
