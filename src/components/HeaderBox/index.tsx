import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components";
import default_Bg from "@/assets/images/Service/Banner.png";
import TitleIcon from "@/assets/images/Service/TitleIcon.png";

interface HeaderBoxProps {
  src?: string;
  title: string;
}

const HeaderBoxWrapper = styled.div<Pick<HeaderBoxProps, 'src'>>`
${props => css`background-image: url("${props.src || default_Bg}");`}
${tw`w-full h-56 sm:h-[43.563rem]  flex flex-col justify-end`}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeaderBox: React.FC<HeaderBoxProps> = ({
  src = default_Bg,
  title
}) => {
  return (
    <HeaderBoxWrapper src={src}>
      <div className="flex h-full flex-col justify-end items-center space-y-4 pb-5 sm:pb-32">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </div>
        <img
          className="w-[4rem] sm:w-[4.5rem] md:w-[5rem] lg:w-[5.938rem] h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] lg:h-[2.75rem]"
          src={TitleIcon}
        />
      </div>
    </HeaderBoxWrapper>
  );
}

export default HeaderBox;