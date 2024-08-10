import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tanscripts Engineering",
  description: "industrial automation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflox-x-hidden">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
