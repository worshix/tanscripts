import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = { 
  description:
    "Tanscripts Engineering specializes in providing cutting-edge industrial automation, control systems, embedded systems and engineering solutions. We help manufacturers optimize operations, increase efficiency, and reduce downtime through advanced automation technologies. We also provide Indtrial automation, solar systems and embedded systems training",
  keywords: [
    "industrial automation",
    "control systems",
    "solar installation",
    "automation engineer",
    "PLC programming",
    "robotics",
    "manufacturing automation",
    "process optimization",
    "SCADA systems",
    "PLC training",
    "Tanscripts Engineering",
    "embedded systems",
  ],
  icons:{
    icon:'/assets/1.png'
  },
  author: "Tanscripts Engineering",
  og: {
    title: "Tanscripts Engineering | Industrial Automation & Engineering Solutions",
    description:
      "At Tanscripts Engineering, we offer top-tier industrial automation and engineering services to enhance manufacturing processes, improve efficiency, and deliver state-of-the-art control systems. Explore our expertise in automation.",
    type: "website",
    url: "https://www.tanscriptsengineering.co.zw",  // Replace with actual URL
    image: "/assets/1.png", // Ensure this image exists
  },
  canonical: "https://www.tanscriptsengineering.co.zw",  // Replace with actual URL
  robots: "index, follow", // Helps search engines index your content
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflox-x-hidden roboto">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
