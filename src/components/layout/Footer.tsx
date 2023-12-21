export default function Footer() {
  return (
    <div id="footer" className="flex justify-center min-w-max max-w-3xl border-t-2 py-8 md:py-12">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <a href="https://github.com/chengp3" target="_blank" className="flex flex-col items-center social"><i className="fab fa-github mx-8"></i><span className="text-xs mt-2 opacity-0 text-amber-600">git</span></a>
      <a href="https://www.instagram.com/alpinewizard" target="_blank" className="flex flex-col items-center social"><i className="fab fa-instagram mx-8"></i><span className="text-xs mt-2 opacity-0 text-amber-600">insta</span></a>
      <a href="https://www.linkedin.com/in/swepat" target="_blank" className="flex flex-col items-center social"><i className="fab fa-linkedin mx-8"></i><span className="text-xs mt-2 opacity-0 text-amber-600">linkedin</span></a>
    </div>
  )
}