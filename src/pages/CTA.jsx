import Button from "../components/ui/Button";
import styles from "../styles/style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s build the future together!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        From cutting-edge websites and blockchain games to innovative apps—GO8
        IT COMPANY delivers top-tier digital solutions to help your business
        thrive anywhere in the world.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
