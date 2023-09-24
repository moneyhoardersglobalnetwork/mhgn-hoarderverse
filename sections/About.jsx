'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Hitchhikers Guide" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hoarderverse</span> is a new
        thing in the future, where you can create, enjoy and access decentralized trust-minimized web3 financial applications or dApps and virtual worlds by feeling
        like it's really real and knowing it has secured value, you can feel what you feel in this hoarderverse
        VR experience, because this is really the{' '}
        <span className="font-extrabold text-white">
          vastness of the hoarderverse
        </span>{' '}
        of today, connecting your web3 wallet to the Hoarderverse Gateway and linking{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the hoarderverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the vastness
        of the hoarderverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
