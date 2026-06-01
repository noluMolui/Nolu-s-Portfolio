export {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useScroll,
  useViewportScroll,
} from 'framer-motion'

// Cast motion to `any` to avoid framer-motion generic inference issues in TSX attributes
import { motion as framerMotion } from 'framer-motion'
const motion: any = framerMotion
export default motion
