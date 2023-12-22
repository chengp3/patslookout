import {ReactNode, useId} from 'react'
import {item} from './variants'
import {motion} from 'framer-motion'
  
interface AnimatedDivProps {
  className: string;
  children: ReactNode;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({children, className}) => {
  return (
    <motion.div key={useId()} className={className}
      variants={item}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv