import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Hero from "./hero/Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
