import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Graphics animate once, when they scroll into view. Visitors who ask their
// device to reduce motion get the finished state straight away.
export default function usePlay() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  return { ref, play: inView || !!reduce, reduce: !!reduce };
}
