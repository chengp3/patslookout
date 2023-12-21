import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
    filename: string;
    title: string;
    tags: string[];
    active: boolean;
    id: number;
}
interface MyComponentProps {
    photos: Photo[];
    i: number;
    setIndex: (index: number) => void;
    isActive: boolean;
    setActive: (active: boolean) => void;
}

const Lightbox: React.FC<MyComponentProps> = ({ photos, i, setIndex, isActive, setActive }) => {
    const fullsize = 'https://patslookout.s3.us-west-2.amazonaws.com/gallery/fullsize/';
    
    const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
    const [text, setText] = useState('');
    const [imageSrc, setImageSrc] = useState<string>('');

    useEffect(() => {
        selectedImage && setImageSrc(fullsize + selectedImage['filename'])
    }, [selectedImage]);

    useEffect(() => {
        const lb = document.getElementById('lb')
        if (isActive) {
            lb?.classList.add('active');
            setSelectedImage(photos[i])
            setText(photos[i].title)
        } 
        else {
            setSelectedImage(null);
            setImageSrc(null)
            lb?.classList.remove('active');
        }
    }, [isActive, i])
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isActive) return
            else {
                if (e.key === 'Escape') {
                    setActive(false)
                }
                if (e.key === 'ArrowRight') {
                    setIndex((i + 1) % photos.length)
                }
                if (e.key === 'ArrowLeft') {
                    setIndex((photos.length + i - 1) % photos.length)
                }
            }
        }
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isActive, i, photos])

    return (
        <motion.div id="lb" className=''
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={(e) => {
                if (e.target !== e.currentTarget) return
                setActive(false)
            }}>
            <LBImage url={imageSrc} />
            <img id="lb-back" src='/back.png' onClick={() => setIndex((i - 1 + photos.length) % photos.length)} />
            <img id="lb-next" src='/next.png' onClick={() => setIndex((i + 1) % photos.length)}/>
            <img id="lb-close" src='/close.png'  onClick={() => setActive(false)}/>
            <span id="lb-text">{text}</span>
        </motion.div>
    )
}

export default Lightbox;