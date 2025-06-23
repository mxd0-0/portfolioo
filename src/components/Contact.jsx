import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import "../index.css";
import {github} from "../assets/index.js";

const contacts = [
    {
        label: "LinkedIn",
        link: "https://linkedin.com/in/mohammed-araou",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
        label: "GitHub",
        link: "https://github.com/mxd0-0",
        icon: github,
    },
    {
        label: "Resume",
        link: "https://shorturl.at/LtSTS",
        icon: "https://img.icons8.com/ios-filled/50/ffffff/open-resume.png",
    },
];

const ContactButton = ({ index, label, link, icon }) => (
    <Tilt className="xs:w-[150px] w-full mx-2">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.1, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary rounded-[20px] py-4 px-6 min-h-[100px] flex justify-center items-center flex-col hover:bg-tertiary-dark transition-colors duration-300"
            >
                <img src={icon} alt={label} className="w-12 h-12 object-contain mb-2" loading="lazy" />
                <h3 className="text-white text-[16px] font-bold text-center">{label}</h3>
            </a>
        </motion.div>
    </Tilt>
);

const Contact = () => {
    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact Me</h3>

                <div className="mt-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {contacts.map((contact, index) => (
                            <ContactButton
                                key={contact.label}
                                index={index}
                                label={contact.label}
                                link={contact.link}
                                icon={contact.icon}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");