import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Home = () => {
  return (
    <div className="bg-black text-white">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
        <Hero />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
        <FeaturedProducts />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}>
        <Services />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}>
        <Categories />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}>
        <DealOfTheDay />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}>
        <Testimonials />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={7} variants={fadeUp}>
        <Brands />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={8} variants={fadeUp}>
        <NewsletterCTA />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={9} variants={fadeUp}>
        <AboutSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={10} variants={fadeUp}>
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default Home;
