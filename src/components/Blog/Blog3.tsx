import React from 'react';

const Blog3: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 md:p-10 lg:p-16 xl:px-[16.25rem] xl:py-[12.125rem] bg-blueSsecondary">
      <div className="flex flex-col sm:gap-y-6 md:gap-y-8 lg:gap-y-0 lg:flex-row items-center lg:items-start justify-between">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-xl leading-normal md:leading-relaxed text-center lg:text-left mb-6 lg:mb-0">
          我们的专业团队随时为您提供服务，期待您的咨询
        </h2>
        <button className="bg-taxSecondary hover:bg-[#d4b274] text-taxPrimary px-12 sm:px-16 md:px-20 py-4 sm:py-5 md:py-7 text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 w-full sm:w-auto">
          联系我们
        </button>
      </div>
    </div>
  );
};

export default Blog3;
