import React from "react";
import { ServiceItem } from "../data";
import { cn } from "@/utils/utils.ts";

const ServiceCard: React.FC<ServiceItem> = ({ title, items, className }) => {
  return (
    <div
      className={cn(
        "p-8 border-b-2 border-[#3A4553]",
        className
      )}
    >
      <h3 className="text-2xl font-bold mb-6 text-taxSecondary text-center">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 text-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
