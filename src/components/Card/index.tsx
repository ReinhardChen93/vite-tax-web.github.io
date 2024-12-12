import { Link } from 'react-router-dom';
type CardType = {
  title: string;
  desc: string;
  icon: string;
  link: string | ''
}

const Card = (props: CardType) => {
  const { title, desc, icon, link } = props
  return (
    <div className='w-full px-4 sm:px-8 md:px-[3.125rem] py-6 md:py-[3.625rem]'>
      <div className='text-xl sm:text-2xl md:text-[2.188rem] text-white'>{title}</div>
      <div className='text-base sm:text-lg md:text-[1.25rem] min-h-[6rem] md:min-h-[9.1875rem] pb-4 md:pb-6 pt-2 md:pt-3 border-b-2 border-[#3A4553] leading-[140%]'>{desc}</div>
      <div className='flex items-center justify-between pt-4 md:pt-6 flex-shrink-0'>
        <img className='w-12 h-12 md:w-[4.063rem] md:h-[4.063rem] object-contain' src={icon}></img>
        <Link to={link} className='py-2 px-4 md:py-[0.938rem] md:px-[2.375rem] text-base md:text-[1.25rem] bg-blueSsecondary'>了解更多</Link>
      </div>
    </div>
  )
}

export default Card