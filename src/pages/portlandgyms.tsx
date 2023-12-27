import AnimatedDiv from '../components/Animate/AnimatedDiv'
import AnimatedContainer from '../components/Animate/AnimatedContainer'

const Gyms = () => {
  return (
    <main id="gyms" className="max-w-sm md:max-w-xl p-10 flex flex-col items-center">
      <AnimatedContainer className="flex flex-col w-full saturate-100 drop-shadow-2xl">
        <AnimatedDiv className="header1">Pat's Portland <br />Climbing Gym Guide</AnimatedDiv>
        <AnimatedDiv className="para pb-5 text-sm italic">Last updated 12/26/23</AnimatedDiv> 
        <AnimatedDiv className="para pb-5 border-b">These are my opinions on Portland climbing gyms that no one asked for. </AnimatedDiv>  
        <AnimatedDiv className="para">My gold standard for gyms is Austin Bouldering Project (I haven't visited MBP or SLBP yet). Spacious, bright, clean, saunas, training boards, good music, great people, absolutely <i>stellar</i> route setting. The only thing I could complain about is the lack of rope climbing.</AnimatedDiv>  
        <AnimatedDiv className="para">Portland apparently has the highest median pizza rating in the country, and I think it's because most of the pizza is at least <i>pretty good</i>. This also applies to the climbing gyms. They're all pretty good!</AnimatedDiv>
        <AnimatedDiv className="para">In my experience gyms tend to fit one of these 3 categories:
        <li><b>Type 1:</b> Large, clean, bright facilities.</li>
        <li><b>Type 2:</b> Old, slightly damp and crusty. Usually the routes are most faithful to outdoor routes. Caters to outdoor climbers, likely using the gym to get stronger for their outdoor project or stay in shape over the long PNW gray (iykyk).</li>
        <li><b>Type 3:</b> A bouldering gym, often where students or parents with children hang out. Frequently hosting birthday parties, etc. Usually slightly cheaper.</li>
        </AnimatedDiv>
        <AnimatedDiv className="header2">The Portland Gyms</AnimatedDiv>

        <AnimatedDiv className='para'><b className="gym-title"><a href="https://movementgyms.com/portland/">Movement</a></b> used to be called Planet Granite until 2022. This gym is conveniently located in the Pearl and is solidly the Type 1 facility.
        <li>Clean, spacious 3 floors</li>
        <li>Large, spacious fitness area with everything you could ever need unless you're a fan of those iso machines you find at Lifetime or other big box gyms. Campus board, tiltable spray wall, Kilter, and all sorts of hangboards and pinch blocks. Honestly though, could work out here regularly without ever touching a climbing hold and be happy.</li>
        <li>Sauna. Excellent yoga classes.</li>
        <li>The routes are around 30m and you can lead most of them. Every route has a toprope hanging on it with a grigri already attached. The gym provides additional ropes to lead on. No auto belays; might be good as they are frequently implicated in serious injuries.</li>
        <li>The routes seem to focus on a particular style of movement and/or holds and usually start off easy and get harder until the anchor. Bouldering setting is a pretty even mix of comp style, burl, and tech.</li>
        <li>Vibe: Music is all over the place. Most of the time it's decent. Rarely it's downright bad, like breakup songs. Also, no lounge area :( Super friendly and professional staff. Slightly corporate vibe overall.</li>
        <li>Clientele: typically 20s-40s yuppies</li>
        </AnimatedDiv>
        <AnimatedDiv className='para border-t pt-5'><b className="gym-title"><a href="https://www.portlandrockgym.com/">Portland Rock Gym</a></b> feels solidly outdoor-catered. The founder set my favorite outdoor 5.12a in the entire PNW. Everyone here has outdoor experience and there's a certain cameraderie from that. For example, if the staff can tell you know what you're doing, they won't bother you because you didn't gris-gris PBUS with robotic precision (Movement). 
        <div className=""><br /><b>PRG Not-Beaverton:</b> centrally located and easy to get to. Slightly older materials, but still clean. Not quite wide open spacious but plenty of room. I climbed here for a year and didn't realize there was even a fitness area. It feels like an afterthought. Not a ton of equipment, I've seen comparable basement gyms.</div>
        <li>B.Y.O.Rope, and a few auto-belays are present and are pretty fun. Permanent plaster cracks that vary from finger to hands and are <i>super</i> fun for crack climbers.</li>
        <li>Setting, both boulders and ropes, is outdoor-esque.</li>
        <li>Vibe and clientele is, indeed, very type 2. A lot of outdoor climbers that shy away from the "dating and fitness" vaguely plastic feel of Movement.</li>
        <div><b>PRG Beaverton:</b> A new, state of the art gym. In many ways will be Movement but bigger and better. Bouldering is typically comp-style and the total climbing square footage is industry leading. Clean, brand new holds. Overall, I personally have high hopes for this gym and might be switching my regular membership over if the ropes are executed well.</div>
        <li>Bright! Lighting-wise feels the most cheerful of any gym in Portland, but they need to put something on the barren, white walls. You feel like you're in that room in the Matrix with the Architect. Kind of exposed. I don't remember any music playing, this was probably on purpose as sound bounces around a lot off the bare walls.</li>
        <li>HUGE fitness area, similar to Movement in that it has everything you could want short of iso machines.</li>
        <li>I haven't tried the yoga classes yet.</li>
        <li>Sauna, rope area opening slated for late 2024.</li>
        <li>Staff is a great balance between professional and chill. Could use some music if they can figure out the sound bouncing. Maybe they could borrow a playlist from ABP :)</li>
        </AnimatedDiv>
        <AnimatedDiv className='para border-t pt-5'><b className="gym-title"><a href="https://www.thecircuitgym.com/">Circuit</a></b> is the local bouldering-only gym. Locations sprinkled around Portland. Frequent resets and chill vibes. Not uncommon to see lots of kids and/or the after-work crowd of middle aged regulars that work in the surrounding tech companies. Slightly cheaper.
        <div><br/><b>Circuit Northwest:</b> Kind of middling spacewise. Holds are probably the most polished in all of Portland, which is to say maybe 4/10 where 10 is the bad side of a dual-tex hold. My friends frequently say the setting is more enjoyable than SW; I personally feel it is less compy in general. Will be sharing this one with kids during after-school hours.</div>
        <div><br/><b>Circuit SW:</b> Small, cramped workout area in a shoehorned second floor (you can hit head on the ceiling pipes). Holds are slightly glassy, maybe 2.5/10. Setting tends to be comp-style. Staff is always super chill, one might even say stoned? Great music. I live a mile away so I'm here all the time but I can't really recommend this one, all else equal, unless you live nearby or are looking for the most recent new set.</div>
        <div className="pb-5"><br/><b>Circuit Tigard:</b> Spacious, bright, and plenty of climbing footage. Spacious, complete workout area on the second floor. They do a good job of fueling vibes with the right playlist. The double-wide, tiltable Kilter is a great attraction. Check out the long climb mode that lights up new holds periodically for a few minutes to simulate a rope route. Staff strikes my personal desired balance between professional and chill.</div>
        <div className="py-5 border-t">Show notes: I've been to Rock Haven, the new Gresham gym, twice but only for kid's competitions (judging/spectating). Looked fairly spacious and clean. I've also been to Stoneworks to drop a rope off, and it looked like the most type 2 gym I've ever seen. The Source in Vancouver and Multnomah Athletic Club both seem to have a strong kid's climbing teams. I feel that you would need a special reason to be climbing at any of these gyms, whether it be geographical or child-related.</div>
        <div className="pb-5"><b>My wishlist:</b> One thing that I genuinely miss from any of these Portland gyms is a lounge area where one can bang out some boulders in between lines of code or Zoom meetings. (The dinky second floor wooden bar doesn't count, Movement.) Also, Portland gyms <i>please</i> upgrade your lighting (except PRG Beaverton who does a great job). The Winters are dark enough. </div>
        <div className="">Anyways, I hope this was insightful. Happy climbing! ✌️</div>
        </AnimatedDiv>
      </AnimatedContainer>
    </main>
  )
}

export default Gyms;