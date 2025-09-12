import  { type ReactNode } from "react";

const variantClass = {
  variant: {
    default: "bg-primary text-white hover:opacity-75",
    outline: "border  border-primary text-primary hover:bg-secondary hover:text-white",
    text: "hover:text-primary",
  },
  size: {
    default: "px-4 py-2",
    small: "px-3 py-1 text-sm",
    medium: "p-4",
  },
};

type VariantType = keyof (typeof variantClass)["variant"];
type SizeType = keyof (typeof variantClass)["size"];

interface Props {
  variant?: VariantType;
  size?: SizeType;
  block?: boolean;
  rounded?: boolean;
  className?: string;
  children?: ReactNode;
  onclick?: () => void
}

function Button({
  variant = "default",
  size = "default",
  block = false,
  rounded = false,
  className = "",
  children,
  onclick
}: Props) {
  const base =
    "inline-flex cursor-pointer  gap-3 items-center justify-center  font-medium transition";

  const computedClass = [
    base,
    variantClass.variant[variant],
    variantClass.size[size],
    block && "w-full",
    rounded && "rounded-full",
    !rounded && "rounded-md",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <button onClick={onclick} className={computedClass}>{children}</button>;
}

export default Button;
