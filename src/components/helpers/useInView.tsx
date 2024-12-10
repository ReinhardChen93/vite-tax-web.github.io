import { useRef, RefObject } from "react"
import { useInView as useInViewFromFramer } from 'framer-motion'

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
}

export default function useInView({ once = true, margin = "-30px 0px 0px 0px" }: UseInViewOptions = {}): [RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInViewFromFramer(ref, {
    once: once,
    margin: margin
  })

  return [ref, isInView]
}