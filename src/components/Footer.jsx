import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="bg-main-800 text-white text-sm w-full mt-4">
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
                <a href="https://www.facebook.com/profile.php?id=61564240952795&mibextid=ZbWKwL" className="bi bi-facebook"> Facebook</a>
              </li>
              <li>
                <a href="mailto:tanscriptsengineering@gmail.com" className="bi bi-envelope"> Email</a>
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

        <div className='w-full flex-shrink-0 flex justify-center gap-2 text-sm'>
        {/* Bottom Bar: Copyright and Credit */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-300 w-full flex-shrink-0">
                <p><time>© {new Date().getFullYear()}</time> Tanscripts Engineering. All rights reserved.</p>
                <p>Made with ❤️ by <Link href='https://pixelcrafte.co.zw' target="_blank" className="underline text-main2">PixelCrafte</Link></p>
              </div>
        </div>
      </section>
    </footer>
  );
}
