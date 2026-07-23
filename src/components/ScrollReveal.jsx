import {motion} from "framer-motion";

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 40,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: duration, delay: delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
};
export default ScrollReveal;
