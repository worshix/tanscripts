export default function Footer() {
  return (
    <footer className="bg-main-800 text-white text-sm w-full mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-center divide-y sm:divide-y-0 sm:divide-x p-4">
        <div className="flex-1 p-2 text-center sm:text-left">
          <h3 className="text-orange-400 font-bold">Tanscripts Engineering</h3>
          <p>Embedded systems design and industrial automation</p>
        </div>

        <div className="flex-1 p-2 text-center sm:text-left">
          <h4 className="text-orange-400 font-bold mb-2">Connect with us</h4>
          <ul className="flex justify-center sm:justify-start gap-4">
            <li>
              <a href="https://wa.me/263713664345" className="bi bi-whatsapp"> WhatsApp</a>
            </li>
            <li>
              <a href="#" className="bi bi-facebook"> Facebook</a>
            </li>
            <li>
              <a href="mailto:tanscriptsengineering@gmail.com" className="bi bi-envelope"> Email</a>
            </li>
            <li>
              <a href="#" className="bi bi-instagram"> Instagram</a>
            </li>
            <li>
              <a href="tel:+263713664345" className="bi bi-phone"> Phone</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-2 text-center sm:text-left">
          <h4 className="text-orange-400 font-bold mb-2"><i className="bi bi-geo-alt"></i> Location</h4>
          <p>Harare, Zimbabwe</p>
        </div>
      </div>

      <div className="bg-main-900 text-sky-200 font-bold text-center p-2">
        <p>© {new Date().getFullYear()} Tanscripts Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
}
