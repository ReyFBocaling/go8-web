import { bg_hero } from "../assets";
import Button from "../components/ui/Button";
import styles from "../styles/style";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col py-12 relative">
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src="/imgs/hero/hero4.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]  "
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className="text-3xl font-poppins font-semibold  text-white">
          EMPOWERING INNOVATIONS, TRANSFORMING POSSIBILITIES
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          GO8 Technology Inc., founded in February 2022, is a forward-thinking
          company specializing in innovative IT solutions.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <img
        src={bg_hero}
        alt=""
        className="md:h-full w-full md:w-auto absolute bottom-20 md:top-0 -right-40 opacity-50"
      />
    </section>
  );
};

export default Hero;
