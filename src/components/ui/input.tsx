import * as React from "react"

import { cn } from "@/utils/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full bg-transparent px-3 py-1 text-base transition duration-300",
          "border-x-0 border-t-0 border-b-[1px] border-white",
          "focus:outline-none focus:ring-0 focus:border-taxSecondary",
          "hover:border-taxSecondary",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
