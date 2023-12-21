import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center transition-swipe max-w-3xl my-10 flex-grow">
      <div id="content" className="flex flex-col w-full saturate-100 drop-shadow-2xl transition-swipe max-w-2xl">
        <div className="w-full flex flex-col p-4 text-3xl font-bold">Some 'jects</div>
        <div id="projects" className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-6 rounded-lg bg-indigo-50">
          <div className="project-container">
            <a href="https://echo-ebon.vercel.app" className="flex flex-col items-center">
              <span className="text-lg text-center"><b>Echo Chambers</b></span>
              <div className="relative w-60 h-60">
                <img className="project-image w-full h-full transition" src="https://patslookout.s3.us-west-2.amazonaws.com/social+network.png" />
                <div className="absolute inset-0 text-overlay flex flex-col items-center justify-evenly">
                  <div>jQuery</div>
                  <div>canvas</div>
                  <div>CSS</div>
                </div>
              </div>
              <div className="mt-2 mx-6 text-xs w-60 text-center italic">An interactive simulation exploring social media dynamics.
                Traits like agreeableness, unfriending, and influenceability determine the makeup of these virtual social groups.
              </div>
            </a>
          </div>
          <div className="project-container">
            <a href="https://trendy-rho.vercel.app" className="flex flex-col items-center">
              <span className="text-lg text-center"><b>Trendy</b></span>
              <div className="relative w-60 h-60">
                <img className="project-image w-full h-full transition" src="https://patslookout.s3.us-west-2.amazonaws.com/trendy-rho.png" />
                <div className="absolute inset-0 text-overlay flex flex-col items-center justify-evenly">
                  <div>javascript</div>
                  <div>python</div>
                  <div>AWS</div>
                </div>
              </div>
              <div className="mt-2 mx-6 text-xs w-60 text-center italic">A price trend analysis app/dashboard. I took one of
                the algorithms I use to trade futures and made a little software flower out of it.
              </div>
            </a>
          </div>
          <div className="project-container">
            <a href="/assets/pages/flow.html" className="flex flex-col items-center">
              <span className="text-lg text-center transition"><b>Flow Cytometry</b></span>
              <div className="relative w-60 h-60">
                <img className="project-image w-full h-full" src="https://patslookout.s3.us-west-2.amazonaws.com/flow.png" />
                <div className="absolute inset-0 text-overlay flex flex-col items-center justify-evenly">
                  <div>python</div>
                  <div>scikitlearn</div>
                </div>
              </div>
              <div className="mt-2 mx-6 text-xs w-60 text-center italic transition">An article exploring machine learning (SVM) to diagnose blood cancer from flow cytometry readings.
                Medicine as a field seems to be ripe for machine learning...</div>
            </a>
          </div>
          <div className="project-container">
            <div className="flex flex-col items-center">
              <span className="text-lg text-center"><b>ClimbWise</b></span>
              <div className="relative w-60 h-60">
                <img className="project-image w-full h-full" src="https://patslookout.s3.us-west-2.amazonaws.com/climbwise.png" />
                <div className="absolute inset-0 text-overlay flex flex-col items-center justify-evenly">
                  <div>python</div>
                  <div>flask</div>
                </div>
              </div>
              <div className="mt-2 mx-6 text-xs w-60 text-center italic">Climbing and nerding out, what a combo. A personal climbing grade dashboard. This one might take me a sec to port (under construction)</div>
            </div>
          </div>
        </div>
        <div id="bonafides" className="w-full flex flex-col mt-12 p-4">
          <div className="text-3xl font-bold mb-4">Tech Background</div>
          <div className="font-bold pl-2">Stack:</div>
          <ul>
            <li>∙ <b>Languages:</b> C, C#, JavaScript, TypeScript, Python, Java</li>
            <li>∙ <b>Web dev:</b> React.js, Next.js, Express, HTML, CSS, SQL (Postgres/Mongo)</li>
            <li>∙ <b>AWS suite:</b> Lambda, S3, RDS, IAM, Gateway</li>
            <li>∙ <b>Distributed:</b> Hadoop, Hive, Spark, Atlas</li>
          </ul>
          <div className="font-bold pl-2 mt-4">Experience:</div>
          <div className="ml-6"><b>Galactic Polymath</b> (Ed Tech)</div>
          <ul className="">
            <li>∙ Game designer. Supported creative studio by writing interactive games (JavaScript, Canvas, SVG)</li>
            <li>∙ Automated lesson plan work flow with CI/CD strategies (GitHub Actions)</li>
            <li>∙ Assisted in transition from React.js to Next.js</li>
            <li>∙ Integrated localization support. JavaScript, SASS. Extended our reach overseas.</li>
          </ul>
          <div className="font-bold pl-2 mt-4">Education:</div>
          <ul><li>∙ B.S. Computer Science, M.D.</li></ul>
        </div>
      </div>
    </main>
  )
}
