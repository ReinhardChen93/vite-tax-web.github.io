import React from 'react';
import Image1 from '@/assets/blog1/Image1.png';
import Image2 from '@/assets/blog1/Image2.png';
import PenIcon from '@/assets/Icon/pen.svg';
import defaultCardImage from '@/assets/images/shield-icon.svg';
import SepIcon from '@/components/SepIcon';

interface StatBoxProps {
  bgColor: string;
  icon?: string;
  content: string[];
  number?: string;
  textColor: string;
}

interface NumberBoxProps {
  number: string;
  content: string[];
  bgColor: string;
}

const StatBox: React.FC<StatBoxProps> = ({ bgColor, icon, content, number, textColor }) => (
  <div
    className={`flex box-border gap-x-2.5 py-2.5 px-3.5 w-full 
      xs:gap-x-3 xs:py-3 xs:px-4
      sm:gap-x-4 sm:py-5 sm:px-5 
      md:gap-x-5 md:py-6 md:px-8
      lg:gap-x-6 lg:py-8 lg:px-10  ${bgColor}`}
  >
    {icon && (
      <img
        className="w-5 h-5 
          xs:w-6 xs:h-6 
          sm:w-8 sm:h-8 
          md:w-12 md:h-12
          lg:w-14 lg:h-14"
        src={icon}
        alt=""
      />
    )}
    <div
      className={`${textColor} flex flex-col justify-between flex-shrink-0 
        text-xs
        xs:text-sm 
        sm:text-base 
        md:text-lg
        lg:text-xl`}
    >
      {content.map((line, index) => (
        <div key={index} className="break-words">
          {line.includes(number || '') ? (
            <>
              {line.split(number || '')[0]}
              <span className="text-sm font-medium
                xs:text-base 
                sm:text-lg 
                md:text-2xl
                lg:text-3xl text-taxSecondary"
              >
                {number}
              </span>
              {line.split(number || '')[1]}
            </>
          ) : (
            line
          )}
        </div>
      ))}
    </div>
  </div>
);

const NumberBox: React.FC<NumberBoxProps> = ({ number, content, bgColor }) => (
  <div
    className={`flex-center box-border gap-x-2.5 py-2.5 px-3.5 w-full 
      xs:gap-x-3 xs:py-3 xs:px-4
      sm:gap-x-4 sm:py-5 sm:px-5 
      md:gap-x-5 md:py-6 md:px-8
      lg:gap-x-6 lg:py-8 lg:px-10 ${bgColor}`}
  >
    <div
      className={`px-1.5 py-1 text-sm font-bold rounded text-white bg-taxPrimary whitespace-nowrap 
        xs:px-2 xs:py-1.5 xs:text-base
        sm:px-3 sm:py-2 sm:text-lg
        md:px-4 md:py-3 md:text-xl
        lg:px-5 lg:py-4 lg:text-2xl`}
    >
      {number}
    </div>
    <div
      className="text-xs text-taxPrimary flex flex-col justify-between flex-shrink-0 
        xs:text-sm
        sm:text-base 
        md:text-lg
        lg:text-xl"
    >
      {content.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  </div>
);

const Blog1: React.FC = () => {
  return (
    <div className="relative p-5 md:p-10 lg:p-16 3xl:px-[16.25rem] xl:py-[12.125rem] bg-taxPrimary">
      <div className="flex flex-col items-center gap-y-4 w-full 
        sm:gap-y-5
        lg:flex-row lg:gap-x-8 lg:items-stretch"
      >
        <div className="grid grid-cols-1 gap-4 w-full
          sm:gap-5
          lg:grid-cols-5 lg:gap-8"
        >
          <div className="w-full flex flex-col gap-y-2 
            sm:gap-y-3
            md:col-span-2 lg:gap-y-[0.625rem] justify-between"
          >
            {[Image1, Image2].map((image, index) => (
              <img
                key={index}
                className="w-full h-auto aspect-[1.6] object-cover "
                src={image || defaultCardImage}
                alt=""
              />
            ))}
          </div>

          <div className="w-full flex flex-col justify-between gap-y-3
            xs:gap-y-4 
            sm:gap-y-5
            lg:col-span-3 lg:gap-y-8"
          >
            <div className="flex flex-col flex-shrink-0"
            >
              {['做您的税务盾牌，', '您只需放心前行。'].map((line, index) => (
                <div key={index} 
                  className="text-lg tracking-wide
                    xs:text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl"
                >
                  {line}
                </div>
              ))}
            </div>
            
            <SepIcon />

            <div className="grid grid-cols-1 gap-2
              xs:gap-3
              sm:gap-4
              md:grid-cols-2 md:gap-4
              lg:gap-5"
            >
              <StatBox
                bgColor="bg-graySecondary"
                icon={PenIcon}
                content={['为412家国际企业','做税务咨询']}
                number="412"
                textColor="text-white"
              />
              <NumberBox
                number="1520个"
                content={['新移民家庭', '做移民前税务规划']}
                bgColor="bg-taxSecondary"
              />
              <StatBox
                bgColor="bg-graySecondary"
                icon={PenIcon}
                content={['处理过10,000+', '美国家庭报税']}
                number="10,000+"
                textColor="text-white"
              />
              <NumberBox
                number="95%"
                content={['税务案件解决成功率']}
                bgColor="bg-taxSecondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;

