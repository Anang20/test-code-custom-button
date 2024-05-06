import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/Icons";
import { IconPositionType, SizeType, TooltipPositionType, VariantType } from "@/types";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  icon?: string;
  iconPosition?: IconPositionType;
  className?: string;
  variant?: VariantType;
  style?: Object;
  size?: SizeType;
  disabled?: boolean;
  isTooltip?: boolean;
  tooltip?: string;
  tooltipPosition?: TooltipPositionType;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Button: React.FC<ButtonProps> = ({
  label,
  style = {},
  className,
  variant = 'primary',
  icon,
  iconPosition = "left",
  size = "medium",
  disabled = false,
  isTooltip = false,
  tooltip,
  tooltipPosition = "top",
  onClick,
}) => {

  const buttonClasses = `
    text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
    }
    ${variant === "primary" ? "bg-primary" : variant === "destructive" ? "bg-destructive" : "bg-background border border-bg-border text-black"}
    ${size === "small" ? "text-xs" : size === "large" ? "text-xl" : "text-base"}
    flex items-center justify-${
      icon
        ? iconPosition === "left"
          ? "flex-start flex-row"
          : "flex-end flex-row-reverse"
        : "center"
    }
  `;

  const iconClasses = `
    text-white
    ${
      size === "small"
        ? "w-4 h-4"
        : size === "large"
        ? "text-xl w-6 h-6"
        : "text-base w-5 h-5"
    }
    ${iconPosition === "left" ? "mr-2" : "ml-2"}
  `;

  const IconComponent = () => {
    if (icon) {
      {/* @ts-ignore */}
      const Icon = Icons?.[icon];
      return <Icon className={iconClasses} />;
    } else {
      return;
    }
  };

  return (
    <>
      {isTooltip ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={style}
                className={buttonClasses}
                disabled={disabled}
                onClick={onClick}
              >
                <IconComponent />
                {label}
              </button>
            </TooltipTrigger>
            <TooltipContent side={tooltipPosition}>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <button
          style={style}
          className={cn(buttonClasses, className)}
          disabled={disabled}
          onClick={onClick}
        >
          <IconComponent />
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
