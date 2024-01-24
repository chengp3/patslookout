import AnimatedDiv from '../components/Animate/AnimatedDiv'
import AnimatedContainer from '../components/Animate/AnimatedContainer'

const BatWall = () => {
  return (
    <main id="batwall" className="max-w-sm md:max-w-xl pt-10 flex flex-col items-center">
      <AnimatedContainer className="flex flex-col w-full items-center justify-center saturate-100 drop-shadow-2xl">
        <AnimatedDiv className="w-full">
          <div className="header1">Bat Wall 🦇 Perma-Draws</div>
          <div className="header2">Background</div>
            <p>In the Spring of 2023 I and several other regular Bat Wall climbers were talking about our many Bat Wall projects when one of us said, "Wouldn't it be nice if there were more permas on them?" What followed was a lot of "huh, why not?" and an informal survey that resulted in overwhelming support. </p>  
            <p className="mt-2">I started a fundraiser, about a dozen people donated enough to blanket the wall in perma-draws. In an effort not to go overboard, here are some general though ts on the permas that the fundraiser purchased at Bat Wall. It can be noted there were about twice as many permas up as were placed from this recent push. </p>
            <p className="mt-2">Since the new ones went up, I've made an effort to ask how people feel about them. I'd estimate 60% overwhelming positive, 20% fairly positive, 15% it was fine before but not negative (indifferent or neutral), and 5% negative (reason stated that the Dracula draws would increase traffic and therefore increase polish on the route).</p>
          <div className="header2">Where are they going?</div>
            <ul>
              <li>∙ In a spot with high utility. Likely for cleaning or rappelling</li>
              <li>∙ Highly annoying clips without an appropriate payoff</li>
              <li>∙ Routes I know people are projecting</li>
              <li>∙ Routes that are at least 12-, likely 12 or 12+.</li>
            </ul>
          <div className="header2">Where are they not going?</div>
            <ul>
              <li>∙ Stick-clip bolts- i.e. Bloodline 2 or Bitenight 2</li>
              <li>∙ Easy clipping positions</li>
              <li>∙ Physically obnoxious/in the way</li>
              <li>∙ Aesthetically obtrusive i.e. low to the ground</li>
            </ul>
        </AnimatedDiv>
        <AnimatedDiv className="w-full my-10">
          <table className="bat-table">
            <thead>
              <tr>
                <th>Draw</th>
                <th>Thoughts</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Drac 5</td><td>Highly annoying clip, doesn't add much to the route</td><td>Up</td>
              </tr>
              <tr>
                <td>Drac 6</td><td>Personally don't care about this one but 4 other people asked about it after I took it down. Will admit it's pretty nice having it there after a burly ramp section.</td><td>Up</td>
              </tr>
              <tr>
                <td>Drac 3rd to last</td><td>Highly annoying cross body clip</td><td>Up</td>
              </tr>
              <tr>
                <td>All other Dracula draws</td><td>Portland-area test piece, high trafficked as access to MFR ledge and Chalkula. Would be convenient but possibly excessive?</td><td>Down</td>
              </tr>
              <tr>
                <td>Frightlight</td><td>Put up for projecting. Pulled bolt 6, left remainder up</td><td>Mostly Up</td>
              </tr>
              <tr>
                <td>Bitenight</td><td>Bolt 3 and 4 up for projecting. Remainder aren't bad clips</td><td>Some up</td>
              </tr>
              <tr>
                <td>Superstition</td><td>Bolt 6 for cleaning. Considered second to last bolt but was in your face on the traverse during a test run</td><td>6 Up</td>
              </tr>
              <tr>
                <td>Vlad</td><td>Great for cleaning and fairly out of sight</td><td>Up</td>
              </tr>
            </tbody>
          </table>
        </AnimatedDiv>
      </AnimatedContainer>
    </main>
  )

}

export default BatWall;