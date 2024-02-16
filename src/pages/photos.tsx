import React, { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Modal from '../components/Modal'

const Photos: React.FC = () => {
  interface Photo {
    filename: string;
    title: string;
    tags: string[];
    active: boolean;
    id: number;
  }

  const allTags = ['All', 'Urban', 'Whimsical', 'Climbing', 'Scenic', 'Hiking', 'Dog', 'Portrait', 'Nature', 'Skiing']
  
  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
  const [activeTag, setActiveTag] = useState('All');

  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  useEffect(() => {
    if (activeTag === 'All') {
      setPhotos(allPhotos);
    }
    else {
      const filteredPhotos = allPhotos.filter(photo => photo.tags.includes(activeTag))
      setPhotos(filteredPhotos.map((photo: Photo, id: number)=>({
        ...photo,
        id: id
      })))
    }    
  }, [activeTag]);

  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => {
        const photoArr = data.map((item: object, id: number) => {
          return {
            ...item,
            active: true,
            id: id
          }
        }) 
        setPhotos(photoArr)
        setAllPhotos(photoArr)
      })
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  const thumbnails = 'https://patslookout.s3.us-west-2.amazonaws.com/gallery/thumbs/';

  return (
    <main className="my-10 max-w-sm md:max-w-3xl flex flex-col flex-grow items-center">
      <ModalContainer>
        {modalOpen && (
          <Modal photos={photos} i={index} setIndex={setIndex} close={close}>
            <></>
          </Modal>
        )}
      </ModalContainer>
      <div className="flex flex-col items-center mb-5">
        <div id="postcards" className="font-bold text-6xl">Postcards</div>
        <div>(photography from my life)</div>
      </div>
      <div id="tags" className='flex flex-wrap justify-center w-screen md:max-w-3xl'>
        {allTags.map((tag, index) => (
            <div key={'tag-' + index} className={`tag ${tag === activeTag ? 'active' : ''}`}
              onClick={() => {
                setActiveTag(tag)
              }}>
              {tag}
            </div>
        ))}
      </div>
      <AnimatePresence>
        <div id='photos' className="mt-6 mx-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {photos.map(({filename, id}) => (
            <motion.img 
              key={`${id}-${activeTag}`}
              src={thumbnails + filename} 
              className="thumb"
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: {
                  delay: .05 * id
                }
              }}
              exit={{opacity: 0}}
              whileHover={{ 
                filter: "grayscale(0%)",
                scale: 1,
                transition: {
                  duration: .1,
                  ease: "linear"
                }
              }}
              onClick={()=>{
                setIndex(id)
                open()
              }}
            />
          ))}
        </div>
      </AnimatePresence>
    </main>
  )
}

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => (
  <AnimatePresence
    initial={false}
    mode="wait"
  >
    {children}
  </AnimatePresence>
);

export default Photos;