import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import cn from "classnames";
const buttonVariants = cva(
  "active:scale-95 inline-flex item-center rounded-md text-sm fot-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isloading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isloading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isloading}
      {...props}
    >
      {isloading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
