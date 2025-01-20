import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface AlertProps {
  type: "error" | "success";
  message: string;
  className?: string;
}

export default function Alert({ type, message, className }: AlertProps) {
  const types = {
    error: {
      icon: BiErrorCircle,
      iconColor: "text-red-700",
      containerColor: "border-red-700 bg-red-50",
    },
    success: {
      icon: BiCheckCircle,
      iconColor: "text-green-700",
      containerColor: "border-green-700 bg-green-50",
    },
  };

  const { icon: Icon, iconColor, containerColor } = types[type];

  return (
    <div
      className={twMerge(
        "flex items-center gap-2 rounded-md border-2 p-3",
        containerColor,
        className,
      )}
    >
      <Icon size={24} className={twMerge("flex-shrink-0", iconColor)} />
      <p role="alert">{message}</p>
    </div>
  );
}
