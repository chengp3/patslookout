import AnimatedDiv from '../components/Animate/AnimatedDiv'
import AnimatedContainer from '../components/Animate/AnimatedContainer'
import Image from 'next/image'

const Gyms = () => {
  return (
    <main id="gyms" className="max-w-sm md:max-w-xl p-10 flex flex-col items-center">
      <AnimatedContainer className="flex flex-col w-full saturate-100 drop-shadow-2xl">
        <AnimatedDiv className="header1">Pat's Portland <br />Climbing Gym Guide</AnimatedDiv>
        <AnimatedDiv className="para pb-5 text-sm italic">Last updated 12/26/23</AnimatedDiv> 
        <AnimatedDiv className="para pb-5 border-b">My opinions on the Portland indoor scene that no one asked for! </AnimatedDiv>  
        <AnimatedDiv className="para">The gold standard for gyms has to be a Bouldering Project (particularly ABP, I haven't been to MBP or SLBP yet). Spacious, bright, clean, saunas, training boards, good music, great people, absolutely <i>stellar</i> setting. The only thing I could complain about is the lack of rope climbing.</AnimatedDiv>  
        <AnimatedDiv className="para">Portland apparently has the highest median pizza rating in the country, and I think it's because most of the pizza is at least <i>pretty good</i>. This also applies to the climbing gyms. They're all pretty good!</AnimatedDiv>
        <AnimatedDiv className="para pb-5 border-b">In my experience gyms tend to fit one of these 3 categories:
        <li><b>Type 1:</b> Large, clean, bright facilities. "Dating and Fitness" vibes</li>
        <li><b>Type 2:</b> Old, slightly damp and crusty. Usually the routes are most faithful to outdoor routes. Caters to outdoor climbers, likely using the gym to get stronger for their outdoor project or stay in shape over the wet PNW winters.</li>
        <li><b>Type 3:</b> A bouldering gym, often where students or parents with children hang out. Frequently hosting birthday parties, etc. Usually slightly cheaper.</li>
        </AnimatedDiv>
        <AnimatedDiv className="header2 pt-5">The Portland Gyms</AnimatedDiv>
        <AnimatedDiv className="flex justify-center">
          <Image src='https://patslookout.s3.us-west-2.amazonaws.com/climbinggyms/pg-small.jpg'
            width='400'
            height='300'
            alt='kirby bouldering'
          />
        </AnimatedDiv>
        
        <AnimatedDiv className='para'><b className="gym-title"><a href="https://movementgyms.com/portland/">Movement</a></b> used to be called Planet Granite until 2022. This gym is conveniently located in the Pearl and is solidly a Type 1 facility.
        <li>Clean, spacious 3 floors</li>
        <li>Large, open fitness area with everything you could ever need unless you're a fan of those iso machines you find at Lifetime or other big box gyms. Campus board, tiltable spray wall, Kilter, and all sorts of hangboards and pinch blocks. Honestly though, could work out here regularly without ever touching a climbing hold and be happy.</li>
        <li>Sauna. Excellent yoga classes.</li>
        <li>30m routes, mostly leadable. Every route can be toproped with a prehung rope and grigri. No auto belays. The routes seem to focus on a particular hold/movement style. Boulder setting is a pretty even mix of comp style, burl, and tech.</li>
        <li>Vibe: Overall mild corporate gym vibe. Music can be all over the place. Most of the time it's decent. Rarely it's straight bad, (it's hard to climb to breakup songs). Also, no lounge area :( Super friendly and professional staff.</li>
        <li>Clientele: typically 20s-40s yuppies</li>
        </AnimatedDiv>
        <AnimatedDiv className='para border-t pt-5'><b className="gym-title"><a href="https://www.portlandrockgym.com/">Portland Rock Gym</a></b> feels solidly outdoor-catered. The founder set my favorite outdoor 5.12a in the entire PNW. Everyone here has outdoor experience and there's a certain cameraderie from that. For example, if the staff can tell you know what you're doing, they won't bother you because you didn't PBUS™️ on the grigri like they do at Movement (🤦‍♂️).
        <div className=""><br /><b>PRG Not-Beaverton:</b> centrally located and easy to get to. Slightly older materials, but still clean. Not quite wide open spacious but plenty of room. I climbed here for a year and didn't realize there was even a fitness area. Not a ton of equipment; I've seen comparable home basement gyms.</div>
        <li>B.Y.O.Rope TR and lead. There are a few auto-belays are and are pretty fun. Permanent plaster cracks that vary from fingers to hands and are super fun if that's your <i>jam</i> (haha). Setting, both boulders and ropes, is outdoor-esque.</li>
        <li>Vibe and clientele is typical for a type 2 gym. A lot of outdoor climbers that aren't about the "dating and fitness" feel of Movement.</li>
        <div><b>PRG Beaverton:</b> A new, state of the art gym. Bouldering is typically comp-style and the total climbing square footage is already as large as Movement, but will more than double in size when another bouldering and a new ropes area open in late 2024. Clean, brand new holds. Overall, I have high hopes for this gym and expect to make this my home gym, especially if the ropes are executed well.</div>
        <li>Bright! Lighting-wise feels the most cheerful of any gym in Portland, but they need to put something on the barren, white walls. You feel like you're in that room in the Matrix with the Architect. Kind of exposed. I don't remember any music playing, this was probably on purpose as sound bounces around a lot off the bare walls.</li>
        <li>HUGE fitness area, similar to Movement in that it has everything you could want short of iso machines.</li>
        <li>I haven't tried the yoga classes yet, but have heard they're enjoyable.</li>
        <li>Staff is a great balance between professional and chill. Could use some music if they can figure out the sound bouncing. Maybe they could borrow a playlist from ABP :)</li>
        </AnimatedDiv>
        <AnimatedDiv className='para border-t pt-5'><b className="gym-title"><a href="https://www.thecircuitgym.com/">Circuit</a></b> is the local bouldering-only gym. Locations sprinkled around Portland. Frequent sets and chill vibes. Not uncommon to see lots of kids and/or the after-work crowd of middle aged regulars that work in the surrounding tech companies. Slightly cheaper.
        <div><br/><b>Circuit Northwest:</b> Large space. Holds are probably the most polished in all of Portland, which is to say maybe 4/10 where 10 is the bad side of a dual-tex hold. My friends frequently say the setting is more enjoyable than SW, and I personally feel it is less compy. Frequently lots of kids during after-school hours.</div>
        <div><br/><b>Circuit SW:</b> Small, cramped workout area. Don't hit your head on the ceiling plumbing. Holds are slightly glassy, maybe 2.5/10. Setting tends to be comp-style. Staff is always super chill, one might even say stoned? Great music. I live a mile away so I'm here all the time but I can't really recommend this one, all else equal, unless you live nearby or are looking for the most recent new set.</div>
        <div className="pb-5"><br/><b>Circuit Tigard:</b> Spacious, bright, and plenty of climbing footage. Spacious, complete workout area on the second floor. They do a good job of fueling vibes with the right playlist. The double-wide, tiltable Kilter is a great attraction. Check out the long climb mode that lights up new holds periodically for a few minutes to simulate a rope route. Staff strikes my personal desired balance between professional and chill.</div>
        <div className="py-5 border-t"><b>Show notes:</b> I've been to Rock Haven, the new Gresham gym, twice but only to judge kid's competitions. Looked fairly spacious and clean. I've also been to Stoneworks to drop something off, and it looked really dark and cramped, like a gym from a bygone era. The Source in Vancouver and Multnomah Athletic Club both seem to have strong kids' teams.</div>
        <div className="pb-5"><b>My wishlist:</b> One thing that I genuinely miss from any of these Portland gyms is a lounge area where one can bang out some boulders in between lines of code or Zoom meetings. (The small second floor table at Movement doesn't count.) Also, Portland gyms <i>please</i> upgrade your lighting (except PRG Beaverton who does a great job). The Winters are dark enough. </div>
        <div className="">Anyways, I hope this was insightful. Happy climbing! ✌️</div>
        </AnimatedDiv>
      </AnimatedContainer>
    </main>
  )
}

export default Gyms;