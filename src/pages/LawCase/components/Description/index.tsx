import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface DescriptionProps {
  title?: string;
  content?: string;
  list?: string[];
}

const Description: React.FC<DescriptionProps> = ({ title, content, list }) => {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="">{content}</div>
        <div className="space-y-4">
          {list?.map((step, index) => (
            <div key={index} className="flex gap-4">
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Description;