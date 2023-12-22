import {ReactNode, useId} from 'react'
import {container} from './variants'
import {motion} from 'framer-motion'
  
interface AnimatedTextProps {
  className: string;
  children: ReactNode;
}

const AnimatedContainer: React.FC<AnimatedTextProps> = ({children, className}) => {
  return (
    <motion.div key={useId()} className={className}
      variants={container}
      initial="hide"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer