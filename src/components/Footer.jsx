//nice footer
export default function Footer() {
  return (
    <>    
    <footer  className='divide-y w-full p-1 bg-main-800 text-white text-sm mt-4 sm:flex justify-between flex-wrap sm:divide-x sm:divide-y-0 pt-2'>
      <div className='p-2'>
        <h3 className='text-orange-400 font-bold text-center'>Tanscripts Engineering</h3>
        <p>Embedded systems design and industrial automation</p>
      </div>
      <div className='p-2'>
        <h4 className='text-orange-400 font-bold text-center bi bi-phone-vibrate'>Connect with us</h4>
        <ul className='flex gap-2 flex-wrap'>
          <li><a href="https://wa.me/263713664345" className='bi bi-whatsapp'>WhatsApp</a></li>
	        <li><a href="#" className='bi bi-facebook'>Facebook</a></li>
          <li><a href="mailto:tanscriptsengineering@gmail.com" className='bi bi-envelope'>Email</a></li>
          <li><a href="#" className='bi bi-instagram'>Instagram</a></li>
	        <li><a href="tel:+263713664345" className='bi bi-phone'>Phone</a></li>
        </ul>
      </div>
      <div className='p-2'>
        <h4 className='text-orange-400 font-bold text-center'><i className='text-white bi bi-geo-alt'></i>Location</h4>
        <p>Harare, Zimbabwe</p>
      </div>
      <div className='p-2'>
        <p className='text-center text-sky-200 font-bold'>© {new Date().getFullYear()} Tanscripts Engineering</p>
      </div>
    </footer>
    </>
  );
}
