import Image from 'next/image'

const Construction = () => {
  return (
    <main className="flex flex-col flex-grow justify-center items-center max-w-3xl">
      <Image id='construction'
        src='https://patslookout.s3.us-west-2.amazonaws.com/construction.gif' 
        width='100'
        height='100'
        alt='Under construction'
      />
      <div className="text-bold mt-5">Under construction :)</div>
    </main>
  )
}

export default Construction;