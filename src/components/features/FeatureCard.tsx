import { FC } from "react";

type FeatureCardProps = {
  position?: "right" | "left";
  title: string;
  description: string;
};

const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="rounded-3xl bg-gray-200 p-5 sm:w-[500px]">
      <p className="text-primary text-xl sm:text-2xl">{title}</p>
      <p className="sm:text-xl sm:text-[#808080]">{description}</p>
    </div>
  );
};

export default FeatureCard;
