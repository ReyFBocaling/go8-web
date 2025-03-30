import { vissionMission } from "../constants";
import styles from "../styles/style";

const VisionMission = () => (
  <section
    className={`${styles.flexCenter} flex-col md:flex-row flex-wrap my-6`}
  >
    {vissionMission.map((stat) => (
      <div key={stat.id} className={`flex-1 flex flex-col  m-3`}>
        <h4 className="font-poppins font-semibold text-2xl text-white mb-2">
          {stat.title}
        </h4>
        <p className="font-poppins font-normal text-base text-gray-500 max-w-sm">
          {stat.value}
        </p>
      </div>
    ))}
  </section>
);

export default VisionMission;
