import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import LakeView from "@/components/LakeView";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <LakeView />
      <Gallery />
      <Events />
      <Testimonials />
      <Location />
      <Reservation />
      <Footer />
    </div>
  );
}
