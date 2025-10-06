import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Services from "../components/home/Services";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import Categories from "../components/home/Categories";
import DealOfTheDay from "../components/home/DealOfTheDay";
import Testimonials from "../components/home/Testimonials";
import Brands from "../components/home/Brands";
import NewsletterCTA from "../components/home/NewsletterCTA";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Categories />
      <DealOfTheDay />
      <Testimonials />
      <Brands />
      <NewsletterCTA />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
