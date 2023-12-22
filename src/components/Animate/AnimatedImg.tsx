import {ReactNode, useId} from 'react'
import {item} from './variants'
import {motion} from 'framer-motion'
  
interface AnimatedDivProps {
  className: string;
  children: ReactNode;
}

const AnimatedImg: React.FC<AnimatedDivProps> = ({children, className}) => {
  return (
    <motion.Img key={useId()} className={className}
      variants={item}
    >
      {children}
    </motion.Img>
  );
};

export default AnimatedImg