import Image from 'next/image'


type ImageData = {
  filename: string;
  title: string;
  tags: string[];
};

export default function Home() {
  return (
    <main className="max-w-xl my-10 flex flex-col items-center transition-swipe px-6 flex-grow">
      <div id="content" className="flex flex-col w-full items-center justify-center saturate-100 drop-shadow-2xl transition-swipe">
        <div className="display sm:hidden w-full">
          <a href="https://www.wta.org/go-hiking/hikes/mailbox-peak"
            className="flex justify-center"><img src="https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg"
              className="saturate-100 drop-shadow-2xl w-1/2 my-4"
              alt="On a clear day..." /></a>
        </div>
        <div className="w-full">
          <a href="https://www.wta.org/go-hiking/hikes/mailbox-peak"><img src="https://patslookout.s3.us-west-2.amazonaws.com/mailbox.jpg" className="float-right saturate-100 drop-shadow-2xl w-1/4 my-4 mx-8
                    hidden md:block"
            alt="On a clear day..." /></a>
          <p className="mt-4 mb-4">My name is Patrick 👋🏻 I solve problems with software. This website is part portfolio and part workshop/lab where I host personal projects.</p>
          <p className="mt-4 mb-4">A little about me. I was born in Austin, Texas, and then discovered a love for mountains; now I currently live in Portland, OR.</p>
          <p className="mt-4 mb-4">Software-wise, (chronologically) I have been a financial data engineer for the SEC using Hadoop-based pipelines. I've used scikitlearn machine learning algorithms to diagnose leukemia. Lately I have been doing full stack web development for <a href="https://www.galacticpolymath.com"><b>Galactic Polymath</b></a>. Mostly NextJS-based stuff.
          </p>
          <p className="mt-4 mb-4">The picture above is from the summit of Mailbox Peak near Seattle, WA, and inspired the domain name for this site. That's Mount Rainier in the distance! I will incorporate a trip journal and gallery here soon.
          </p>
        </div>
      </div>
    </main>
  )
}
