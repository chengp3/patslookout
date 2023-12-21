import React, { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from './Backdrop'

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 40,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface Photo {
  filename: string;
  title: string;
  tags: string[];
  active: boolean;
  id: number;
}
interface ModalProps {
  photos: Photo[];
  i: number;
  setIndex: (i: number) => void;
  close: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ photos, i, close, setIndex }) => {
  const fullsize = 'https://patslookout.s3.us-west-2.amazonaws.com/gallery/fullsize/';

  const [text, setText] = useState('');
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const selectedImage = photos[i]
    selectedImage && setImageSrc(fullsize + selectedImage['filename'])
    selectedImage && setText(selectedImage['title'])
  }, [i]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close() };
      if (e.key === 'ArrowRight') setIndex((i + 1) % photos.length);
      if (e.key === 'ArrowLeft') setIndex((photos.length + i - 1) % photos.length);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [i, photos])

  return (
    <Backdrop onClick={close}>
      <motion.div
        id="lb-img-container"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {imageSrc && <motion.img id="lb-img" key={imageSrc} src={imageSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e)=>e.stopPropagation()}
          />}
        </AnimatePresence>
      </motion.div>
      <img id="lb-back" src='/back.png' onClick={(e) => {
        e.stopPropagation()
        setIndex((i - 1 + photos.length) % photos.length)
      }} />
      <img id="lb-next" src='/next.png' onClick={(e) => {
        e.stopPropagation()
        setIndex((i + 1) % photos.length)
      }} />
      <img id="lb-close" src='/close.png' onClick={() => close()} />
      <AnimatePresence>
        {text && (
          <motion.div id="lb-text"
            key={text} // Key tied to the text content
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Example transition duration
          >
            <span>{text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Backdrop>
  )
}

export default Modal;