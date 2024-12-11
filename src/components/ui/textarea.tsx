import * as React from "react"

import { cn } from "@/utils/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full border-white border-[1px] bg-transparent px-3 py-2 text-base transition duration-300",
        "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        className,
        "focus-visible:outline-none focus-visible:ring-taxSecondary focus-visible:ring-ring",
        "hover:border-taxSecondary",
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
