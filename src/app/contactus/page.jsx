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
            <li><a href="tel:+263713664345" className='bi bi-phone'> Phone</a></li>
            <li><a href="https://wa.me/263713664345" className='bi bi-whatsapp'> WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h4 className='section-heading self-center text-center'>Mail</h4>
          <ul className='flex gap-4 flex-wrap items-center justify-center'>
            <li><a href="mailto:transcripts@gmail.com" className='bi bi-envelope'> transcripts@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h1 className='section-heading'>Follow Us</h1>
          <div className='flex gap-4 justify-center text-lg'>
            <Link href='https://www.facebook.com/profile.php?id=61564240952795&mibextid=ZbWKwL'><i className='bi bi-facebook'></i></Link>
          </div>
        </div>
        </div>
      </section>
      <section className="h-screen">
        .
      </section>
      {/* <ContactUs /> */}
    </main>
  )
}

export default page
