import Sep from '@/assets/Icon/Sep.png';
import { cn } from "@/utils/utils";
interface SepIconProps {
  className?: string;
}
const SepIcon: React.FC<SepIconProps> = ({ className }) => {
  return (
    <img

      className={cn("lg:w-[5.9375rem] lg:h-[2.75rem] xs:w-[3.23875rem] xs:h-6", className)}
      src={Sep}
      alt=""
    />
  );
};
export default SepIcon;
