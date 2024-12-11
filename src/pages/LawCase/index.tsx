import AnimationRevealPage from "@/components/helpers/AnimationRevealPage";
import HeaderBox from '@/components/HeaderBox';

import Case1 from '@/assets/images/Service/case1.png';

import { CaseDetails } from "./components/CaseDetails";
import { Statistics } from "./components/Statistics";
import Description from "./components/Description";

export default function LawCasePage() {


  const caseDetails = {
    clientName: "Robert Symon",
    date: "20 January 2021",
    serviceValue: 5500,
    lawType: "Civil Case",
    caseStatus: "Won",
    timeFrame: "3 Month, 5 Days",
    result: 12000,
  };

  return (
    <AnimationRevealPage>
      <HeaderBox title="国际税务"/>
      <div className="custom-container">
        <img className="w-full h-auto mb-14" src={Case1} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Description
              title='案例概览'
              content='客户是一位有多家海外公司和银行账户的富豪，长达多年未合规申报，涉及的收入和资产非常复杂。在与客户深入沟通了解其具体情况后，我们的团队运用我们的国际税务合规经验，量身定制了最佳方案。我们帮助客户申报海外公司和个人收入、海外金融资产、海外银行账户等信息，确保其在税务方面合规。最终，我们成功帮助客户避免了数百万美元的罚款和欠税，并得到了客户的高度评价和信任。'

            />

            <Description
              title='客户需求'
              content="Sometimes determining the driver at fault after an accident can come into question, which can be a frustrating experience, when your main concern should be healing. If you find yourself in this situation. Recently, a woman was walking down a flight of stairs when they suddenly collapsed. This led to her falling two stories and suffering facial abrasions, pulmonary contusions, and other back, neck, head, and right shoulder injuries. Keep yourself up-to-date on your area of law. Be aware of new developments, as laws and rules often change based on the situation and new cases are being decided every day. Never judge, just listen and advise. Even if your client has made a bad decision, which he or she will undoubtedly do at some point throughout the course of your representation."

            />

            <Description
              title='案例难点与挑战'
              content="Appropriately empower dynamic leadership skills after business portals. Globally my interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements."
              list={
                [
                  '· Dynamically target high-payoff intellectual capital for customized',
                  '· Interactively procrastinate high-payoff content',
                  '· Credibly reinter mediate backend ideas for cross-platform models',
                  '· Delivers the tools you need to save time Improve field performance always'
                ]
              }
            />

            <Description
              title='如何成功'
              content="Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Being untruthful will get you nowhere and give you a reputation of dishonesty. Plus, your clients will not trust you, which does not translate into repeat business from clients."
              list={
                [
                  '1. It brings the right people together with all the right information and tools to get work done',
                  '2. We provide operational efficiency, data security, and flexible scale',
                  '3. Your best work, together in one package that works seamlessly from your computer',
                  '4. Delivers the tools you need to save time Improve field performance always'
                ]
              }
            />

            <img src={Case1} className="w-full h-auto p-6" alt="" />

            <Description
              title='总结'
              content="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring interoperable internal or “organic” sources."
              
            />
          </div>
          <div className="lg:col-span-4">
            <CaseDetails caseDetails={caseDetails} />
            <Statistics />
          </div>
        </div>
      </div>

    </AnimationRevealPage>


  );
}