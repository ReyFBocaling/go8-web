import styles, { layout } from "../styles/style";
import { about_us_cube, logo } from "../assets";
import Stats from "./Stats";
import VisionMission from "./VisionMission";

const AboutUs = () => (
  <section id="features" className={`${layout.section} relative`}>
    <div className={`${layout.sectionInfo} w-full relative `}>
      <h2 className={`text-3xl md:text-5xl  text-gradient font-bold`}>
        WHAT WE DO
      </h2>
      <p className={`${styles.paragraph} max-w-3xl mt-5`}>
        At GO8 Technology Inc., we specialize in providing cutting-edge IT
        solutions designed to meet the unique needs of small and medium-sized
        businesses. From streamlining operations to boosting productivity, we
        deliver innovative technologies and customized strategies that drive
        growth and efficiency. Whether it's developing software, optimizing
        workflows, or integrating digital tools, we empower businesses to thrive
        in an ever-evolving digital landscape.
      </p>
      <VisionMission />

      {/* bg */}
      <img
        src={logo}
        className="w-2/3 absolute -left-40 -top-40 opacity-5 pointer-events-none"
      />
    </div>

    <div className={`w-1/2 md:w-2/5 absolute -top-20 -right-7 md:-right-10`}>
      <img src={about_us_cube} alt="" />
    </div>
  </section>
);

export default AboutUs;
