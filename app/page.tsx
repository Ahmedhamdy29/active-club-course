import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Value from "@/components/Value";
import Curriculum from "@/components/Curriculum";
import Audience from "@/components/Audience";
import Trainer from "@/components/Trainer";
import Reviews from "@/components/Reviews";
import Why from "@/components/Why";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Value />
        <Curriculum />
        <Audience />
        <Trainer />
        <Reviews />
        <Why />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
