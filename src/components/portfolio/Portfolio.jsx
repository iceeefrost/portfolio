import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28543006/pexels-photo-28543006/free-photo-of-black-and-white-new-york-city-skyline-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/28199959/pexels-photo-28199959/free-photo-of-the-old-man-of-storr-skye-scotland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/12895164/pexels-photo-12895164.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/28451399/pexels-photo-28451399.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
