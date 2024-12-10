import React from "react";

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from "framer-motion";
import useInView from "@/components/helpers/useInView";

interface AnimationRevealProps {
  disabled?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

function AnimationReveal({ disabled, children }: AnimationRevealProps) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

// ... existing code ...

interface AnimatedSlideInComponentProps {
  direction?: 'left' | 'right';
  offset?: number;
  children: React.ReactNode;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }: AnimatedSlideInComponentProps) {
  const [ref, inView] = useInView({ margin: `-${offset}px 0px 0px 0px`});

  const x = { target: "0%" };

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  return (
    <div ref={ref} className="overflow-hidden"> {/* 添加 overflow-hidden */}
      <motion.section
        initial={{ x: x.initial }}
        animate={{ 
          x: inView && x.target,
          transitionEnd:{
            x: inView && 0
          }
        }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default (props: AnimationRevealProps) => (
  <div className="App font-display min-h-screen text-secondary-500 relative"> {/* 移除最外层的 overflow-hidden，添加 relative */}
    <AnimationReveal {...props} />
  </div>
);