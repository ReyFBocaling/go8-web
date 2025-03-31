import { bg_hero } from "../assets";
import Button from "../components/ui/Button";
import styles from "../styles/style";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col py-7 md:py-14 relative mt-20 md:h-[50vh]"
    >
      <div
        className={`flex-1 flex ${styles.flexCenter}  relative mt-32 md:mt-0`}
      >
        <img
          src="/imgs/hero/hero4.png"
          className="w-1/2 md:w-[100%] md:h-[100%]  z-[5] absolute left-0 -top-32 md:top-0 "
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className="text-3xl md:text-4xl font-poppins font-bold  text-white text-gradient">
          EMPOWERING INNOVATIONS, TRANSFORMING POSSIBILITIES
        </h1>

        <p className={`${styles.paragraph} max-w-2xl mt-5`}>
          GO8 Technology Inc., founded in February 2022, is a forward-thinking
          company specializing in innovative IT solutions.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <img
        src={bg_hero}
        alt=""
        className="md:h-full w-full md:w-auto absolute bottom-20 md:top-0 -right-10 md:-right-40 opacity-50"
      />
    </section>
  );
};

export default Hero;
