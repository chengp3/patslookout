import Link from 'next/link'
import React, {useState} from 'react';

export default function Header() {
  /*
  const [imageSrc, setImageSrc] = useState('https://patslookout.s3.us-west-2.amazonaws.com/gallery/thumbs/ssix.jpg');
  const updateImage = (newSrc: string) => {
    setOpacity(0); 
    setTimeout(() => {
      setImageSrc(newSrc); 
      setOpacity(1);
    }, 300); 
  };
  const [opacity, setOpacity] = useState(1);*/

  return (
    <>
      <div id="header" className="flex justify-center p-10 border-b-2 max-w-3xl">
        <div id="title" className="flex flex-col justify-center items-center mr-10 md:mr-16">
          <div className="border border-black">
            <img id="headerpic" className="h-36 md:h-48 p-2" 
              src='https://patslookout.s3.us-west-2.amazonaws.com/gallery/thumbs/ssix.jpg'
            />
          </div>
          <a href="/" className="text-2xl md:text-4xl mt-4 font-bold">pat's lookout</a>
        </div>
        <div id="navbar" className="flex flex-col justify-center items-start py-2">
          <Link href='/' className="py-3 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 hover:scale-110 hover:text-amber-500 transition md:text-2xl"
          >Home</Link>
          <Link href="/tech" 
          className="py-3 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 hover:text-amber-500 transition hover:scale-110 md:text-2xl"
          >Tech</Link>
          <Link href="/photos" className="py-3 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition hover:text-amber-500 hover:scale-110 md:text-2xl"
          >Photos</Link>
          <Link href="/climbing" className="py-3 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition hover:scale-110 hover:text-amber-500 md:text-2xl"
          >Climbing</Link>
        </div>
      </div>
    </>
  )
}


{/*<img className="h-28 md:h-36 border border-black p-2 mb-2"
          src={'https://patslookout.s3.us-west-2.amazonaws.com/balls.jpg'}/>
          <img className="h-28 md:h-36 border border-black p-2 mb-2"
          src={'https://patslookout.s3.us-west-2.amazonaws.com/gallery/thumbs/cherries.jpg'}/>
          <img className="h-28 md:h-36 border border-black p-2 mb-2"
          src={'https://patslookout.s3.us-west-2.amazonaws.com/gallery/thumbs/spire.jpg'}/>*/}