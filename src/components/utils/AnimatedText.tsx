import { motion, Variants } from 'framer-motion';

export const ContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export const Letter: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
    },
  },
};

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.span
      variants={ContainerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: 'inline-block' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={Letter}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
