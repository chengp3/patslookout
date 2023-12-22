export default function Footer() {
  return (
    <div id="footer" className="flex justify-center min-w-max max-w-3xl border-t-2 py-8 md:py-12">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <a href="https://github.com/chengp3" target="_blank"><i className="fab fa-github mx-8"></i><span>git</span></a>
      <a href="https://www.instagram.com/alpinewizard" target="_blank"><i className="fab fa-instagram mx-8"></i><span>insta</span></a>
      <a href="https://www.linkedin.com/in/swepat" target="_blank"><i className="fab fa-linkedin mx-8"></i><span>linkedin</span></a>
      <a href="mailto:patrick@patslookout.com" target="_blank"><i className="fas fa-envelope mx-8"></i><span>email</span></a>
    </div>
  )
}