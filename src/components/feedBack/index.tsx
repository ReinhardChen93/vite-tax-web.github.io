const FeedBack = () => {
  const testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "我们是一家香港公司， 在美国从事信息领域的业务。诺诚为我们分析各州的税务优劣情况，员工薪资筹划、税务策略规划， 为我们进入美国市场打下来良好的基础.",
      customerName: "Nattasha",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "我们打算做美国投资移民时，对美国的税务完全不懂，对海外资产报税、家族遗产税等税负十分担忧. 诺诚给我们做了全面的美国税务分析,使我们在移民前就做好了资产规划，放心的做了移民.",
      customerName: "Minci pal",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      quote:
        "我们是新加坡国籍，在美国购置了不少物业资产做投资， 涉及到很多外国人在美国地产投资的税务问题，稍有不慎就会面临高税负或者税务罚款，幸亏有诺诚帮我们在财税方面保驾护航, 才使我们在美国的投资业务顺利进行.",
      customerName: "Steven Marcetti",
    },
  ];
  return (
    <div className="relative min-h-screen p-5 md:p-10 lg:p-16 xl:px-[16.25rem] xl:py-[12.125rem] bg-taxPrimary">
      <div className="lg:text-[2.813rem] text-3xl font-black tracking-wide text-center mb-12">
        <span className="relative">
          客户反馈
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {testimonials.map((testimonial, index) => (
          <div className="lg:w-1/3 w-full" key={index}>
            <div className="bg-gradient-to-br from-[#2D3642] to-[#1F2937] rounded-xl lg:p-8 p-6 h-full relative shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/30 hover:border-gray-600/50 group">
              <div className="flex flex-col">
                {/* Profile section */}
                <div className="flex items-center mt-auto border-b border-gray-700/30 pb-4 lg:pb-6">
                  <img
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover ring-2 ring-taxSecondary/50 shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                    src={testimonial.imageSrc}
                    alt={testimonial.customerName}
                  />
                  <div className="ml-3 lg:ml-4">
                    <p className="text-white font-semibold text-base lg:text-lg group-hover:text-taxSecondary transition-colors duration-300">
                      {testimonial.customerName}
                    </p>
                    <p className="text-taxSecondary/80 text-xs lg:text-sm font-medium">
                      Consultant
                    </p>
                  </div>
                </div>
                {/* Quote text */}
                <div className="text-gray-200/90 text-base lg:text-lg leading-relaxed mt-6 lg:mt-8 pl-4 lg:pl-8 relative z-10 group-hover:text-white transition-colors duration-300">
                  {testimonial.quote}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
