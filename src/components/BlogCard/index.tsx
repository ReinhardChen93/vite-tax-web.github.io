import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/utils/utils";
import { ChevronRight } from "lucide-react";

interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  url?: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  description,
  imageUrl,
  className,
  url
}) => {
  return (
    <Card
      className={cn(
        "rounded-none group overflow-hidden transition-all duration-300 hover:shadow-xl bg-gradient-to-b from-gray-900 to-gray-800 ",
        "transform hover:-translate-y-1 hover:scale-[1.02]",
        className
      )}
    >
      <div className="relative h-[150px] sm:h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10 transition-opacity group-hover:opacity-75" />
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Date overlay */}
        <div className="absolute bottom-4 left-4 z-20">
          <time
            dateTime={date}
            className="px-3 py-1 text-sm font-medium bg-yellow-500/90 text-taxSecondary rounded-full"
          >
            {date}
          </time>
        </div>
      </div>

      <CardHeader className="pt-6">
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-sm leading-relaxed text-gray-300 line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter>
        <Link
          to={url}
          className="text-yellow-500 hover:text-taxSecondary px-0 font-semibold flex items-center gap-2 group/button"
        >
          Read More
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
