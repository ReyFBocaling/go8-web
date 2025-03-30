import styles from "./styles/style";
import {
  Billing,
  AboutUs,
  Services,
  Clients,
  CTA,
  Stats,
  Testimonials,
  Hero,
} from "./pages";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Projects from "./pages/Projects";
import Expertise from "./pages/Expertise";
import FAQ from "./pages/Faq";
import Careers from "./pages/Careers";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <AboutUs />
        <Projects />
        <Services />
        <Expertise />
        <div className="flex items-center flex-col md:flex-row gap-7 mt-12">
          <FAQ />
          <Careers />
        </div>

        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
