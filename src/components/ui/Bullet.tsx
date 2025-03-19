import { FC } from "react";

type BulletProps = {
  text: string;
  variant?: "secondary" | "primary";
  className?: string;
};

const Bullet: FC<BulletProps> = ({ text, className, variant = "primary" }) => {
  return (
    <ul
      className={`list-disc pl-6 marker:text-2xl ${
        variant === "secondary"
          ? "marker:text-white text-white"
          : "marker:text-primary "
      } ${className}`}
    >
      <li className="text-xl font-bold">{text}</li>
    </ul>
  );
};

export default Bullet;
