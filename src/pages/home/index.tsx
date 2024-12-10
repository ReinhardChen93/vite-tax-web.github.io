import AnimationRevealPage from "@/components/helpers/AnimationRevealPage";


import Banner from '@/components/Banner';
import Blog1 from '@/components/Blog/Blog1';
import Blog2 from '@/components/Blog/Blog2';
import Blog3 from '@/components/Blog/Blog3';
import FeedBack from '@/components/feedBack';
import Reservation from '@/components/reservation';
 
const HomePage: React.FC = () => {


  return (
    <AnimationRevealPage>
      
      <Banner />
      <Blog1 />
      <Blog2 />
      
      <FeedBack />
      <Blog3 />
      <Reservation />

    </AnimationRevealPage>
  );
};

export default HomePage;
