import Image from 'next/image'
import React, {useEffect} from 'react';

const links = [0, 1, 2, 3]

export default function Home() {
  useEffect(() => {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
    links.forEach((i)=>{
      const label = document.getElementById(`label${i}`)
      const circle = document.getElementById(`circle${i}`)
      const climber = document.getElementById(`climber${i}`)
      if (isMobile) {
        circle?.addEventListener("touchstart", () => {
          label?.classList.add('nose-label-active')
          circle?.classList.add('nose-circle-active')
          climber?.classList.add('climber-active')
        })
        circle?.addEventListener("touchend", () =>{
          label?.classList.remove('nose-label-active')
          circle?.classList.remove('nose-circle-active')
          climber?.classList.remove('climber-active')
        })
        label?.addEventListener("touchstart", () => {
          label?.classList.add('nose-label-active')
          circle?.classList.add('nose-circle-active')
          climber?.classList.add('climber-active')
        })
        label?.addEventListener("touchend", () =>{
          label?.classList.remove('nose-label-active')
          circle?.classList.remove('nose-circle-active')
          climber?.classList.remove('climber-active')
        })
      }
      else {
        circle?.addEventListener("mouseover", () => {
          label?.classList.add('nose-label-active')
          circle?.classList.add('nose-circle-active')
          climber?.classList.add('climber-active')
        })
        circle?.addEventListener("mouseout", () =>{
          label?.classList.remove('nose-label-active')
          circle?.classList.remove('nose-circle-active')
          climber?.classList.remove('climber-active')
        })
        label?.addEventListener("mouseover", () => {
          label?.classList.add('nose-label-active')
          circle?.classList.add('nose-circle-active')
          climber?.classList.add('climber-active')
        })
        label?.addEventListener("mouseout", () =>{
          label?.classList.remove('nose-label-active')
          circle?.classList.remove('nose-circle-active')
          climber?.classList.remove('climber-active')
        })
      }
    })
  }, [])


  return (
    <main className="flex flex-col items-center justify-center transition-swipe max-w-3xl my-10 flex-grow">
      <div id="nosewrapper">
        <div id="thenose">
          <a href="/batwall">
            <div id="circle1" className="nose-circle" />
            <div id="label1" className="label">Bat Wall Draws</div>
          </a>
          <a href="/construction">
            <div id="circle2" className="nose-circle" />
            <div id="label2" className="label">The Beta Map</div>
          </a>
          <a href="/construction">
            <div id="circle3" className="nose-circle" />
            <div id="label3" className="label">ClimbWise Analytics</div>
          </a>
          <a href="/portlandgyms">
            <div id="circle0" className="nose-circle" />
            <div id="label0" className="label">Portland Climbing Gyms</div>
          </a>
          <Image id='climber1' className="climber" 
            src="https://patslookout.s3.us-west-2.amazonaws.com/climbing/honnold.png" 
            height="600"
            width="1076"
            alt="Honnlove"
          />
          <Image id='climber2' className="climber" 
            src="https://patslookout.s3.us-west-2.amazonaws.com/climbing/ondra.png" 
            height="600"
            width="403"
            alt="Ondra"
          />
          <Image id='climber3' className="climber" 
            src="https://patslookout.s3.us-west-2.amazonaws.com/climbing/lynnhill.png" 
            height="432"
            width="299"
            alt="Lynn Hill"
          />
          <Image id='climber0' className="climber" 
            src="https://patslookout.s3.us-west-2.amazonaws.com/climbing/janja.png" 
            height="432"
            width="299"
            alt="Janja"
          />
        </div>
      </div>
    </main>
  )
}
