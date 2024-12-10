import Card from '@/components/Card';
import SepIcon from '@/components/SepIcon';

import Bulid from '@/assets/blog2/bulid.png';
import Earth from '@/assets/blog2/earth.png';
import Person from '@/assets/blog2/person.png';
import Money from '@/assets/blog2/money.png';
import Family from '@/assets/blog2/family.png';
import Plan from '@/assets/blog2/plan.png';

const Blog2 = () => {
  const BlogCardsInfo = [
    {
      title: '国际税务',
      desc: '为个人和企业提供跨境税务解决、移民家庭税务、海外金融资产税务申报、 企业跨国税务解决、税务转移低价.',
      icon: Earth,
      link: '',
    },
    {
      title: '企业税务',
      desc: '为企业提供税务咨询、税筹框架设计、合理避税、员工薪资设定、税务合规审核、上市前税务规划等服务',
      icon: Bulid,
      link: '',
    },
    {
      title: '个人税务',
      desc: '为个人及家庭提供所得税合理避税方案、遗产及赠与税务规划、退休金规划、家庭信托规划、国税局查税处理等服务。',
      icon: Person,
      link: '',
    },
    {
      title: '会计服务',
      desc: '提供全方位的会计服务，财务报表制作及纳税申报、资金流管理、风险评估和合规性审核。',
      icon: Money,
      link: '',
    },
    {
      title: '家族办公室',
      desc: '提供为高净值家庭提供全方位财富管理服务的组织. 包括投资管理、资产配置、遗产规划、税务咨询、慈善事业策划、家族治理、教育计划等。',
      icon: Family,
      link: '',
    },
    {
      title: '税务筹划',
      desc: '帮助个人家族及企业，设计税筹方案及框架，制定选择最优税务抵扣项目，有效优化资产配置，合理减免税务负担。',
      icon: Plan,
      link: '',
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-5 md:p-10 lg:p-16 xl:px-[16.25rem] xl:py-[12.125rem] bg-blueSsecondary">
      <div className="flex md:justify-between flex-col items-stretch mb-6 md:mb-8 lg:mb-[2.813rem]">
        <div className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-[4.625rem]">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-[2.813rem]">服务项目</div>
          <SepIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </div>
        <div className="w-[1px] xs:w-full xs:h-[2px] bg-[#3A4553] xs:my-3 sm:my-4 md:my-5"></div>
        <div className="text-sm sm:text-base md:text-lg lg:text-[1.25rem] text-white xl:max-w-[46.563rem]">
          我们提供的服务包括但不限于
          <span className="text-taxSecondary">
            税务咨询、税务规划、税务合规和报告、遗产规划、转让定价
          </span>
          等。我们根据客户的具体需求和状况，提供
          <span className="text-taxSecondary">定制化</span>
          的解决方案，帮助客户实现
          <span className="text-taxSecondary">税务最优化</span>
          ，同时保证所有的税务行为符合相关的法规要求。
        </div>
      </div>
      <div className="grid box-border gap-4 sm:gap-5 md:gap-6 lg:gap-7 items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {BlogCardsInfo.map((item, index) => (
          <div 
            className="flex-shrink-0 bg-taxPrimary transition-transform hover:scale-105" 
            key={index}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog2;
