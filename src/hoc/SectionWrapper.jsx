import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => () => (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 overflow-visible`}
    >
      <span id={idName} className="block absolute -top-20" />
      <Component />
    </motion.section>
);

export default SectionWrapper;
