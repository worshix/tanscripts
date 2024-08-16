import ContactUs from './ContactUs'
import Link from 'next/link'

const page = () => {
  return (
    <main className='p-2'>
      <h1 className="text-3xl sm:text-5xl font-bold mt-4 sm:my-10 text-center text-main-400">Contact Us</h1>
      <section className='flex items-center justify-center'>
      <div className='flex flex-col sm:flex-row lg:flex-col gap-6 text-center sm:text-left items-center justify-center'>
        <div>
          <h4 className='section-heading'>Connect With Us</h4>
          <ul className='flex gap-4 items-center justify-center'>
            <li><a href="tel:+263772916923" className='bi bi-phone'> Phone</a></li>
            <li><a href="tel:+263778473160" className='bi bi-telephone'> Cell</a></li>
          </ul>
        </div>
        <div>
          <h4 className='section-heading self-center text-center'>Mail</h4>
          <ul className='flex gap-4 flex-wrap items-center justify-center'>
            <li><a href="mailto:gsateamglobal@gmail.com" className='bi bi-envelope'> Main</a></li>
            <li><a href="mailto:Info@gsa.co.zw" className='bi bi-envelope'> Info</a></li>
            <li><a href="mailto:Headofprograms@gsa.co.zw" className='bi bi-envelope'> Head of Programs</a></li>
            <li><a href="mailto:secretary@gsa.co.zw" className='bi bi-envelope'> Secretary</a></li>
          </ul>
        </div>

        <div>
          <h1 className='section-heading'>Follow Us</h1>
          <div className='flex gap-4 justify-center text-lg'>
            <Link href='https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/'><i className='bi bi-linkedin'></i></Link>
            <Link href='https://twitter.com/Preservefutures'><i className='bi bi-twitter'></i></Link>
            <Link href='https://www.facebook.com/profile.php?id=1000093674206378&mibextid=LQQJ4d'><i className='bi bi-facebook'></i></Link>
          </div>
        </div>
        </div>
      </section>

      <section className="join-us p-2 rounded-lg sm:w-2/3 mx-auto shadow-md my-4">
          <h1 className="section-heading text-center">Join Us</h1>
          <p className="p-2 slide-in-top sm:text-lg">
            Donate!!! Your support can save lives.
            We welcome any gifts and donations, and sponsorships to support our work. We are sure that you will find interesting and important purposes to support your involvement and generosity in the work that we are doing.
            For inquiries and conversations about gifts, donations and sponsorships, please contact us at:
            <br />
            <span className="font-bold text-main2">Info@gsa.co.zw</span>
            <Link href="mailto:Info@gsa.co.zw" className="btn-main">Donate</Link>
          </p>
        </section>

      <ContactUs />
    </main>
  )
}

export default page