import { useRef } from 'react'
import { useInView } from 'framer-motion'
import type { UseInViewOptions } from 'framer-motion'

export function useInViewAnimation(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, options)
  return { ref, isInView }
}