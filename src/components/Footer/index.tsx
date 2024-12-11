import Logo from "@/assets/Icon/Logo.svg";
import sepL from "@/assets/images/Footer/sepL.png";
import sepR from "@/assets/images/Footer/sepR.png";
import { Instagram, Facebook, Twitter } from "lucide-react";


// 类型定义
type SocialIconProps = {
  Icon: React.ComponentType<any>;
};

// 可复用的组件
const SocialIcon = ({ Icon }: SocialIconProps) => (
  <Icon 
    className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer hover:opacity-80 transition-opacity" 
  />
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="whitespace-nowrap box-border py-4 lg:py-[1.8125rem] text-white text-2xl lg:text-3xl border-solid border-[#3A4553] border-y-2 border-x-0">
    {children}
  </div>
);


const footerData = [
  {
    title: "快速链接",
    doubleColumn: true,
    lists: [
      ["首页", "About", "Contact", "Blog", "Blog Post", "Lawyers"],
      ["Lawyer Single", "Case Results", "Practice Areas", "Packages", "Package Single"]
    ]
  },
  {
    title: "服务项目",
    items: ["Start Here", "Style Guide", "404 Not Found", "Password Protected", "Licenses", "Changelog"]
  },
  {
    title: "Practice Area",
    items: ["Tax", "Tax", "Tax", "Tax", "Business Tax"]
  },
  {
    title: "联系我们",
    items: [
      "Head Office Address 10501 Valley Blvd #1100 El Monte, Ca 91731",
      "Phone: Info@example.com"
    ]
  }
];

const Footer = () => {
  const socialIcons = [
    { Icon: Instagram },
    { Icon: Facebook },
    { Icon: Twitter }
  ];

  return (
    <footer className="relative min-h-screen bg-blueSsecondary custom-container">
      <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-24 max-w-[1402px] mx-auto pb-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
          <div className="hidden lg:flex items-center gap-4">
            <img
              className="w-full max-w-[23.75rem] h-[2.75rem]"
              alt="Line"
              src={sepL}
            />
          </div>
          <div className="flex flex-row items-center gap-4 px-4 sm:px-0">
            <img
              className="w-[2.8rem] sm:w-[3.527rem] h-[3.8rem] sm:h-[4.875rem]"
              alt="Icon"
              src={Logo}
            />
            <div className="text-white text-xl sm:text-2xl lg:text-3xl font-medium text-center">
              诺诚财富管理与税务顾问公司
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <img
              className="w-full max-w-[23.75rem] h-[2.75rem]"
              alt="Line"
              src={sepR}
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8 sm:gap-10 lg:gap-28">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col gap-6 sm:gap-8">
              <SectionTitle>{section.title}</SectionTitle>
              {section.doubleColumn ? (
                <div className="flex flex-col 3xl:flex-row gap-8 flex-shrink-0">
                  {section.lists.map((list, listIndex) => (
                    <ul key={listIndex} className="text-[#D7D7D7] text-base sm:text-lg lg:text-xl leading-8 lg:leading-10 px-0">
                      {list.map((item, itemIndex) => (
                        <li key={itemIndex} className="whitespace-nowrap">{item}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              ) : (
                <ul className="text-[#D7D7D7] text-base sm:text-lg lg:text-xl leading-8 lg:leading-10">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex flex-col items-center gap-6 w-full py-8 border-y-2 border-[#3A4553]">
          <div className="flex flex-col sm:flex-row justify-between w-full gap-6 sm:gap-4">
            <p className="text-[#d6d6d6] text-base sm:text-lg lg:text-xl text-center sm:text-left">
              Copyright ©{" "}
              <span className="text-[#d1b06b]">
                Essence Wealth Management & Tax Advisory
              </span>
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <span className="text-[#d1b06b] text-base sm:text-lg lg:text-xl">
                Follow :
              </span>
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} Icon={icon.Icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
