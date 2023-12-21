import LightBox from '../components/LightBox'
import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';

const Photos: React.FC = () => {
  interface Photo {
    filename: string;
    title: string;
    tags: string[];
    active: boolean;
    id: number;
  }
  interface Tags {
    [key: string]: boolean;
  }

  const allTags = ['All', 'Urban', 'Whimsical', 'Climbing', 'Scenic', 'Hiking', 'Dog', 'Portrait', 'Nature', 'Skiing']
  
  /*  
  function initTags (li: string[], dir: boolean) {
    const initialTagsState: Tags = allTags.reduce((acc: Tags, tag: string) => {
      acc[tag] = dir;
      return acc;
    }, {});
    return initialTagsState
  }
  */

  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
  const [activeTag, setActiveTag] = useState('All');

  const toggleTagActive = (tagName: string) => {
    setActiveTag(tagName)
    setPhotos(photos.map(photo => {
      if (photo.tags.includes(tagName) || tagName === 'All') {
          return { ...photo, active: true };
      } else {
          return { ...photo, active: false };
      }
    }));
  };

  useEffect(() => {
    if (activeTag === 'All') setPhotos(allPhotos);
    setPhotos(allPhotos.filter(photo => photo.tags.includes(activeTag)))
  }, [activeTag]);

  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => {
        const photoArr = data.map((item: object, index: number) => {
          return {
            ...item,
            active: true,
            id: index
          }
        }) 
        setPhotos(photoArr)
        setAllPhotos(photoArr)
      })
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  const thumbnails = 'https://patslookout.s3.us-west-2.amazonaws.com/gallery/thumbs/';
  /*
  function updateLightbox(i: number) {
    const newPhotoObj = photos.find(photo => photo.id === i);
    const lightboxCaption = document.getElementById('lb-text');
    lightboxCaption?.classList.add('opacity-0')
    lightboxCaption?.classList.remove('opacity-100')
    const lb = document.getElementById('lightbox')
    if (!newPhotoObj) return

    const img = new Image()
    img.classList.add('opacity-0', 'transition')
    const previmg = lb?.querySelector('.lb-img')
    previmg?.classList.add('opacity-0')
    if (previmg && previmg.parentNode === lb) {
      lb?.removeChild(previmg)
    }
    img.classList.add('lb-img')
    lb?.appendChild(img)
    img.onload = function () {
      img.classList.remove('opacity-0')
      img.classList.add('opacity-100')
      if (lightboxCaption) {
        lightboxCaption.innerText = newPhotoObj.title;
      }
      lightboxCaption?.classList.remove('opacity-0')
      lightboxCaption?.classList.add('opacity-100')
    }
    img.src = fullsize + newPhotoObj?.filename;
  }

  useEffect(() => {
    const images = document.querySelectorAll('.thumb')
    images.forEach(image => {
      const imgID = parseInt(image.id)
      image.addEventListener('click', e => {
        console.log(imgID)
        setIndex(imgID)
        document.getElementById('lightbox')?.classList.add('active')
        updateLightbox(imgID)
      })
    })
  }, [photos])

  function handleNext(i: number) {
    let nextIndex = i;
    console.log(photos)
    do {
      nextIndex = (nextIndex + 1) % photosRef.current.length;
    } while (!photosRef.current[nextIndex].active && nextIndex !== i);
    console.log('nextIndex:', nextIndex, 'current:', i)
    if (nextIndex === i) return;
    setIndex(nextIndex);
    updateLightbox(nextIndex);
  }

  function handlePrev(i: number) {
    let prevIndex = indexRef.current;
    do {
      prevIndex = (prevIndex - 1 + photosRef.current.length) % photosRef.current.length;
    } while (!photosRef.current[prevIndex].active && prevIndex !== i);
    console.log('prevIndex:', prevIndex, 'current:', i)
    if (prevIndex === i) return;
    setIndex(prevIndex);
    console.log('changing photo to: ', photosRef.current[prevIndex])
    updateLightbox(prevIndex);
  }
  function handleKeyDown(event: KeyboardEvent) {
    const lightbox = document.getElementById('lightbox');

    if (lightbox && lightbox.classList.contains('active')) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault(); 
        handlePrev(indexRef.current);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault(); 
        handleNext(indexRef.current);
      }
      if (event.key === 'Escape') {
        event.preventDefault(); 
        const img = lightbox.querySelector('.lb-img');
        img && lightbox.removeChild(img);
        lightbox.classList.remove('active')
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function loadImageAndApplyEffect(imageUrl: string) {
    const newImage = new Image();
    const displayImage = document.getElementById('lb-img') as HTMLImageElement; // The image element in your lightbox

    if (displayImage) {
    newImage.onload = function() {
      displayImage.src = imageUrl; // Update the display image src
      displayImage.classList.add('fade-in'); // Apply the fade-in effect
    };

    newImage.src = imageUrl; 
    }
  }

  function toggleLightbox() {
    const lb = document.getElementById('lightbox')
    lb?.classList.remove('active')
  }
*/
  return (
    <div className="my-10 max-w-3xl flex flex-col items-center">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet" />
      </Head>
      <div id="lightbox" className="" onClick={(e) => {
        if (e.target !== e.currentTarget) return
        toggleLightbox();
      }}>
        <img id="lb-back" src='/back.png' onClick={() => handlePrev(indexRef.current)} />
        <img id="lb-next" src='/next.png' onClick={() => handleNext(indexRef.current)} />
        <img id="lb-close" src='/close.png' />
        <span id="lb-text" className="opacity-0"></span>
        <div id="loader" />
      </div>
      <div className="flex flex-col items-center mb-5">
        <div id="postcards" className="font-bold text-6xl">Postcards</div>
        <div>(from my life)</div>
      </div>
      <div id="tags" className='flex'>
        {
          allTags.map((tag, index) => (
            <div key={'tag-' + index} className={`tag ${tag === activeTag ? 'active' : ''}`}
              onClick={() => {
                toggleTagActive(tag)
              }
              }>{tag}</div>
          ))
        }
      </div>
      <div id="photos" className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          photos.map((photo, index) =>
            photo.active &&
            (<img id={index.toString()} data-filename={photo.filename} src={thumbnails + photo.filename}
              key={index} className={'thumb'} />)
          )
        }
      </div>
    </div>
  )
}

export default Photos;