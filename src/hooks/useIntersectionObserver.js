
import { useState, useEffect,useRef } from "react"

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "-50px 0px -50px 0px", ...options }
    )

    if (node) observer.observe(node)
    return () => {
      if (node) observer.unobserve(node)
    }
  }, [options])

  return [ref, isIntersecting]
}
export default useIntersectionObserver;