import AnimatedDiv from '../components/Animate/AnimatedDiv'
import AnimatedContainer from '../components/Animate/AnimatedContainer'

const Gyms = () => {
  return (
    <main id="gyms" className="max-w-sm md:max-w-xl p-10 flex flex-col items-center">
      <AnimatedContainer className="flex flex-col w-full saturate-100 drop-shadow-2xl">
        <AnimatedDiv className="header1">Pat's Portland <br />Climbing Gym Guide</AnimatedDiv>
        <AnimatedDiv className="para pb-5 border-b">Seattle's Vertical World was America's first indoor rock-climbing gym, then came Portland Rock Gym, way back in the 80's. So they know how to do it up in the PNW. These are my unvarnished opinions on the indoor scene in Portland that no one asked for. Who am I? I'm just some guy who likes climbing like... <i>a lot.</i></AnimatedDiv>  
        <AnimatedDiv className="para">I've heard somewhere that Portland has the highest median pizza rating in the country. There isn't a whole lot of bad pizza, and I've also had much better. I feel like this about the climbing gyms too. My gold standard for a climbing gym is definitely the Bouldering Project series, specifically Austin Bouldering Project (and more recently Minnesota and Salt Lake City). Spacious, bright, clean, saunas, training boards, good music, great people, absolutely <i>stellar</i> route setting. Really, the only thing it's missing is rope climbing.</AnimatedDiv>  
        <AnimatedDiv className="para">Anyways, in my experience gyms tend to fit one of these 3 categories:
        <li><b>Type 1:</b>Large, clean, bright facilities. Caters to yuppies and singles looking to mingle. Slightly plastic feel.</li>
        <li><b>Type 2:</b>Old, slightly damp and crusty. Usually the routes are most faithful to outdoor routes. Caters to outdoor climbers, likely using the gym to get stronger for their outdoor project or stay in shape over the long PNW gray (iykyk).</li>
        <li><b>Type 3:</b>The cheap gym where students and parents with children hang out. Oftentimes will be hosting birthday parties and the like.</li>
        </AnimatedDiv>
        <AnimatedDiv className="header2">The Portland gyms</AnimatedDiv>

        <AnimatedDiv className='para'>Under construction ...</AnimatedDiv>
      </AnimatedContainer>
    </main>
  )

}

export default Gyms;